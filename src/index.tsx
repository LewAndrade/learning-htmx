import { html } from "@elysiajs/html";
import { Elysia } from "elysia";
import { contactsController } from "./controllers/contactsController";

const app = new Elysia()
  .use(html())
  .use(contactsController)
  .get("/", Bun.file("index.html"))
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
);
