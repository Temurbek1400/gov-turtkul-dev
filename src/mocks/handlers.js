import { rest } from "msw";
import newsDataTemp from "./newsDataTemp";
const BASE_URL = "https://turtkul_gov";

export const handlers = [
   rest.get(BASE_URL + "/news/uz/:filter", (req, res, ctx) => {
      return res(
         ctx.status(200),
         ctx.delay(500),
         ctx.json(
            newsDataTemp.uz.filter((item) => item.filter === req.params.filter)
         )
      );
   }),
   rest.get(BASE_URL + "/news/ru/:filter", (req, res, ctx) => {
      return res(
         ctx.status(200),
         ctx.delay(1500),
         ctx.json(
            newsDataTemp.ru.filter((item) => item.filter === req.params.filter)
         )
      );
   }),
];
