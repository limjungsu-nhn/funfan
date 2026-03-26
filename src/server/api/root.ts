import { aiContextRouter } from "~/server/api/routers/aiContext";
import { authRouter } from "~/server/api/routers/auth";
import { userRouter } from "~/server/api/routers/user";
import { wateringRouter } from "~/server/api/routers/watering";
import { workRouter } from "~/server/api/routers/work";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  user: userRouter,
  work: workRouter,
  watering: wateringRouter,
  aiContext: aiContextRouter,
});

export type AppRouter = typeof appRouter;
export const createCaller = createCallerFactory(appRouter);
