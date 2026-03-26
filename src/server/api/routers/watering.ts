import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const wateringRouter = createTRPCRouter({
  // 물 주기
  water: protectedProcedure
    .input(
      z.object({
        workId: z.string(),
        episodeId: z.string(),
        emotionTag: z.enum(["FUNNY", "MOVING", "EXCITING", "LOVING"]).optional(),
        comment: z.string().max(200).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const existing = await ctx.db.wateringEvent.findUnique({
        where: {
          readerId_episodeId: {
            readerId: ctx.session.user.id,
            episodeId: input.episodeId,
          },
        },
      });
      if (existing) {
        throw new TRPCError({ code: "CONFLICT", message: "이미 물을 주셨습니다." });
      }

      const [event] = await ctx.db.$transaction([
        ctx.db.wateringEvent.create({
          data: {
            workId: input.workId,
            episodeId: input.episodeId,
            readerId: ctx.session.user.id,
            emotionTag: input.emotionTag,
            comment: input.comment,
          },
        }),
        ctx.db.work.update({
          where: { id: input.workId },
          data: { waterCount: { increment: 1 } },
        }),
      ]);

      return event;
    }),

  // 작품의 물주기 이벤트 목록 (작가 대시보드)
  byWork: protectedProcedure
    .input(z.object({ workId: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.wateringEvent.findMany({
        where: { workId: input.workId },
        include: {
          reader: { select: { nickname: true } },
          episode: { select: { title: true, episodeNum: true } },
        },
        orderBy: { createdAt: "desc" },
        take: 50,
      });
    }),
});
