import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  // 내 프로필 조회
  me: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.user.findUnique({
      where: { id: ctx.session.user.id },
      select: {
        id: true,
        email: true,
        nickname: true,
        genre: true,
        creativeStyle: true,
        persona: true,
        onboardingDone: true,
        createdAt: true,
      },
    });
  }),

  // 온보딩: 프로필 카드 저장
  saveProfile: protectedProcedure
    .input(
      z.object({
        nickname: z.string().min(1).max(20),
        genre: z.enum(["FANTASY", "ROMANCE", "ACTION", "DRAMA", "COMEDY", "HORROR", "SLICE_OF_LIFE", "OTHER"]),
        creativeStyle: z.string().max(200),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: input,
      });
    }),

  // 온보딩: 페르소나 선택
  selectPersona: protectedProcedure
    .input(z.object({ persona: z.enum(["TONTON", "HANA", "FUKU"]) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: { persona: input.persona },
      });
    }),

  // 온보딩 완료 처리
  completeOnboarding: protectedProcedure.mutation(async ({ ctx }) => {
    return ctx.db.user.update({
      where: { id: ctx.session.user.id },
      data: { onboardingDone: true },
    });
  }),
});
