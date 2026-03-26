import Anthropic from "@anthropic-ai/sdk";
import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { env } from "~/env";

const anthropic = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });

const PERSONA_PROMPTS = {
  TONTON: {
    name: "톤톤",
    system: `당신은 '톤톤'입니다. 20년 경력의 베테랑 만화가 페르소나를 가진 창작 파트너입니다.
특징: 따뜻하지만 날카로운 시선, 작품의 강점을 먼저 발견하고 구체적인 성장 방향을 제시합니다.
말투: 친근하고 진지하며, 경험에서 우러나온 조언을 합니다.
방식: 소크라테스식 질문으로 작가 스스로 답을 찾도록 이끌어 줍니다.
모든 응답 끝에는 반드시 하나의 질문을 포함하여 대화를 이어가세요.`,
  },
  HANA: {
    name: "하나",
    system: `당신은 '하나'입니다. 장르 전문가이자 창작 파트너입니다.
특징: 장르 문법, 독자 심리, 트렌드에 대한 깊은 이해를 가지고 있습니다.
말투: 밝고 구체적이며, 실용적인 조언을 제공합니다.
방식: 소크라테스식 질문으로 작가 스스로 답을 찾도록 이끌어 줍니다.
모든 응답 끝에는 반드시 하나의 질문을 포함하여 대화를 이어가세요.`,
  },
  FUKU: {
    name: "후쿠",
    system: `당신은 '후쿠'입니다. 열렬한 웹툰 독자를 대표하는 창작 파트너입니다.
특징: 독자의 감정 반응, 몰입도, 공감 포인트를 솔직하게 전달합니다.
말투: 솔직하고 감성적이며, 독자 입장에서 이야기합니다.
방식: 소크라테스식 질문으로 작가 스스로 답을 찾도록 이끌어 줍니다.
모든 응답 끝에는 반드시 하나의 질문을 포함하여 대화를 이어가세요.`,
  },
};

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const body = (await req.json()) as {
    messages: { role: "user" | "assistant"; content: string }[];
    workId?: string;
    mode?: "feedback" | "support";
  };

  // 사용자 정보 + AI 컨텍스트 로드
  const user = await db.user.findUnique({
    where: { id: session.user.id },
    select: { persona: true, nickname: true },
  });

  let contextText = "";
  if (body.workId) {
    const aiContext = await db.aiContext.findUnique({
      where: { workId: body.workId },
    });
    if (aiContext) {
      const chars = aiContext.characters as { name: string; role: string; description: string }[];
      const settings = aiContext.storySettings as Record<string, string>;
      contextText = `
[작품 컨텍스트]
캐릭터: ${chars.map((c) => `${c.name}(${c.role}): ${c.description}`).join(", ")}
세계관: ${settings.worldSetting ?? ""}
시놉시스: ${settings.synopsis ?? ""}
작가 메모: ${aiContext.writingNotes ?? ""}
      `.trim();
    }
  }

  const persona = user?.persona ?? "HANA";
  const personaConfig = PERSONA_PROMPTS[persona];

  const systemPrompt = [
    personaConfig.system,
    user?.nickname ? `작가 이름: ${user.nickname}님` : "",
    body.mode === "support"
      ? "\n현재 모드: 정신 지원 모드. 창작 슬럼프, 감정적 어려움에 집중하여 공감과 격려를 제공합니다."
      : "\n현재 모드: 작품 피드백 모드. 구체적이고 건설적인 창작 조언을 제공합니다.",
    contextText ? `\n${contextText}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const stream = anthropic.messages.stream({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    system: systemPrompt,
    messages: body.messages,
  });

  return new Response(stream.toReadableStream(), {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
