import bcrypt from "bcryptjs";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const authRouter = createTRPCRouter({
  // 초대 코드 유효성 검사
  validateInviteCode: publicProcedure
    .input(z.object({ code: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const invite = await ctx.db.inviteCode.findUnique({
        where: { code: input.code.toUpperCase() },
      });
      if (!invite) throw new TRPCError({ code: "NOT_FOUND", message: "유효하지 않은 초대 코드입니다." });
      if (invite.usedAt) throw new TRPCError({ code: "CONFLICT", message: "이미 사용된 초대 코드입니다." });
      return { valid: true };
    }),

  // 회원가입
  signUp: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(8),
        inviteCode: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const invite = await ctx.db.inviteCode.findUnique({
        where: { code: input.inviteCode.toUpperCase() },
      });
      if (!invite || invite.usedAt) {
        throw new TRPCError({ code: "FORBIDDEN", message: "초대 코드가 유효하지 않습니다." });
      }

      const existing = await ctx.db.user.findUnique({ where: { email: input.email } });
      if (existing) {
        throw new TRPCError({ code: "CONFLICT", message: "이미 등록된 이메일입니다." });
      }

      const passwordHash = await bcrypt.hash(input.password, 12);

      const user = await ctx.db.user.create({
        data: {
          email: input.email,
          passwordHash,
          inviteCode: { connect: { id: invite.id } },
        },
      });

      // 초대 코드 사용 처리
      await ctx.db.inviteCode.update({
        where: { id: invite.id },
        data: { usedAt: new Date(), usedById: user.id },
      });

      return { userId: user.id };
    }),
});
