import { rest } from "msw";

const BASE_URL = "https://turtkul_gov";

export const handlers = [
  rest.get(BASE_URL + "/news", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(500),
      ctx.json({
        hello: "hello",
      })
    );
  }),
];
