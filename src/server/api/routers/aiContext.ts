import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const aiContextRouter = createTRPCRouter({
  // AI 컨텍스트 조회
  get: protectedProcedure
    .input(z.object({ workId: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.aiContext.findUnique({
        where: { workId: input.workId },
      });
    }),

  // AI 컨텍스트 저장
  save: protectedProcedure
    .input(
      z.object({
        workId: z.string(),
        characters: z.array(
          z.object({
            name: z.string(),
            role: z.string(),
            description: z.string(),
          }),
        ),
        storySettings: z.object({
          genre: z.string().optional(),
          worldSetting: z.string().optional(),
          synopsis: z.string().optional(),
        }),
        writingNotes: z.string().max(1000).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { workId, ...data } = input;
      return ctx.db.aiContext.upsert({
        where: { workId },
        create: { workId, userId: ctx.session.user.id, ...data },
        update: data,
      });
    }),
});
