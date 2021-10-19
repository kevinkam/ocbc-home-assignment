import { rest } from "msw";

export const handlers = [
  rest.post(
    "https://green-thumb-64168.uc.r.appspot.com/login",
    (req, res, ctx) => res(ctx.json([]))
  ),
];
