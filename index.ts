import { Hono } from "hono";

const hono = new Hono();

hono.get("/", (c) => {
  return c.json({ message: "Hello, World!" });
});

hono.get("/hello/:name", (c) => {
  const name = c.req.param("name");
  return c.json({ message: `Hello, ${name}!` });
});

export default {
  port: 4000,
  fetch: hono.fetch,
};
