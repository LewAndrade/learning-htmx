import { Elysia, t } from "elysia";
import { Contacts } from "../components/Contacts";
import { CreateContact } from "../components/CreateContact";
import { EditContact } from "../components/EditContact";
import { Contact } from "../components/Contact";
import { TContact } from "../types/Contact";
import { Root } from "../views/Root";

export let contacts: TContact[] = [
  {
    id: 1,
    firstName: "Joe",
    lastName: "Blow",
    email: "joe@blow.com",
  },
  {
    id: 2,
    firstName: "Blue",
    lastName: "Blow",
    email: "blue@blow.com",
  },
];

let lastId = 2;

export const contactsController = new Elysia()
  .get("/contacts", () => {
    return Root(
      <>
        {Contacts()}
        {CreateContact()}
      </>,
    );
  })
  .get(
    "/contact/:id",
    ({ params: { id } }) => {
      const contact = contacts.find((c) => c.id === id);
      if (!contact) throw Error();
      return Contact(contact);
    },
    { params: t.Object({ id: t.Numeric() }) },
  )
  .get(
    "/contact/:id/edit",
    ({ params: { id } }) => {
      const contact = contacts.find((c) => c.id === id);
      if (!contact) throw Error();
      return EditContact(contact);
    },
    {
      params: t.Object({ id: t.Numeric() }),
    },
  )
  .put(
    "/contact/:id",
    ({ body, params: { id } }) => {
      contacts = contacts.map((c) => {
        if (c.id === id) {
          return { ...c, ...body };
        }
        return c;
      });
      const contact = contacts.find((c) => c.id === id);
      if (!contact) throw Error();
      return Contact(contact);
    },
    {
      params: t.Object({ id: t.Numeric() }),
      body: t.Object({
        firstName: t.String(),
        lastName: t.String(),
        email: t.String(),
      }),
    },
  )
  .post(
    "/contacts",
    ({ body }) => {
      if (body.email && body.firstName && body.lastName) {
        lastId++;
        contacts.push({ id: lastId, ...body });
      }
      return Contacts();
    },
    {
      body: t.Object({
        firstName: t.String(),
        lastName: t.String(),
        email: t.String(),
      }),
    },
  )
  .delete(
    "/contact/:id",
    ({ params: { id } }) => {
      contacts = contacts.filter((c) => c.id !== id);
      return "";
    },
    {
      params: t.Object({ id: t.Numeric() }),
    },
  );
