import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const workRouter = createTRPCRouter({
  // 내 작품 목록
  list: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.work.findMany({
      where: { authorId: ctx.session.user.id },
      include: {
        episodes: { orderBy: { episodeNum: "asc" } },
        _count: { select: { waterings: true } },
      },
      orderBy: { createdAt: "desc" },
    });
  }),

  // 작품 상세
  byId: protectedProcedure
    .input(z.object({ workId: z.string() }))
    .query(async ({ ctx, input }) => {
      const work = await ctx.db.work.findUnique({
        where: { id: input.workId },
        include: {
          episodes: { orderBy: { episodeNum: "asc" } },
          aiContext: true,
          _count: { select: { waterings: true } },
        },
      });
      if (!work) throw new TRPCError({ code: "NOT_FOUND" });
      return work;
    }),

  // 작품 생성
  create: protectedProcedure
    .input(
      z.object({
        title: z.string().min(1).max(100),
        description: z.string().max(500).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.work.create({
        data: {
          ...input,
          authorId: ctx.session.user.id,
          aiContext: {
            create: {
              userId: ctx.session.user.id,
            },
          },
        },
      });
    }),

  // 에피소드 게시 (꽃봉오리 상태 업데이트)
  publishEpisode: protectedProcedure
    .input(
      z.object({
        workId: z.string(),
        title: z.string().min(1),
        content: z.string().optional(),
        images: z.array(z.string()).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const work = await ctx.db.work.findUnique({
        where: { id: input.workId, authorId: ctx.session.user.id },
        include: { episodes: true },
      });
      if (!work) throw new TRPCError({ code: "NOT_FOUND" });

      const episodeNum = work.episodes.length + 1;

      const episode = await ctx.db.episode.create({
        data: {
          title: input.title,
          content: input.content,
          images: input.images ?? [],
          episodeNum,
          isPublished: true,
          workId: input.workId,
        },
      });

      // 꽃봉오리 단계 업데이트 로직
      const newStage = calcFlowerStage(episodeNum, work.flowerStage);
      await ctx.db.work.update({
        where: { id: input.workId },
        data: { flowerStage: newStage },
      });

      return episode;
    }),
});

function calcFlowerStage(
  episodeCount: number,
  current: string,
): "SEED" | "SPROUT" | "BUD" | "BLOOM" | "WREATH" {
  if (episodeCount >= 20) return "WREATH";
  if (episodeCount >= 10) return "BLOOM";
  if (episodeCount >= 5) return "BUD";
  if (episodeCount >= 2) return "SPROUT";
  return "SEED";
}
