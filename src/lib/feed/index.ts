export type FeedEvent = {
  id: string;
  type: "water" | "comment" | "cheer";
  readerName: string;
  message?: string;
  emotionTag?: "FUNNY" | "MOVING" | "EXCITING" | "LOVING";
};

export interface FeedProvider {
  subscribe(cb: (event: FeedEvent) => void): () => void;
}

const SIMULATED_NAMES = ["미유키", "사쿠라", "하루토", "아오이", "렌", "이치카", "소라", "나나미"];
const SIMULATED_MESSAGES = [
  "오늘도 응원해요! 화이팅 🌸",
  "작업 중이시군요! 멋있어요",
  "새 에피소드 기대할게요",
  "좋은 작품 항상 감사해요 💕",
  "집중해서 작업하시는 모습 너무 좋아요",
  "완성 기대하고 있어요!",
];

const EMOTION_TAGS = ["FUNNY", "MOVING", "EXCITING", "LOVING"] as const;

function randomItem<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

function randomId(): string {
  return Math.random().toString(36).slice(2, 10);
}

export class SimulatedFeedProvider implements FeedProvider {
  private intervalMs: number;

  constructor(intervalMs = 8000) {
    this.intervalMs = intervalMs;
  }

  subscribe(cb: (event: FeedEvent) => void): () => void {
    const timer = setInterval(() => {
      const type = Math.random() < 0.6 ? "water" : Math.random() < 0.5 ? "comment" : "cheer";
      const event: FeedEvent = {
        id: randomId(),
        type,
        readerName: randomItem(SIMULATED_NAMES),
        message: type !== "water" ? randomItem(SIMULATED_MESSAGES) : undefined,
        emotionTag: type === "water" ? randomItem(EMOTION_TAGS) : undefined,
      };
      cb(event);
    }, this.intervalMs + Math.random() * 4000);

    return () => clearInterval(timer);
  }
}
