import { Hono } from "hono";
import { cors } from "hono/cors";

const hono = new Hono();
hono.use(cors());

hono.get("/", (c) => {
  return c.json({ message: "Hello, World!" });
});

hono.get("/hello/:name", (c) => {
  const name = c.req.param("name");
  return c.json({ message: `Hello, ${name}!` });
});

const port = process.env.PORT || 4000;

export default {
  port,
  fetch: hono.fetch,
};
