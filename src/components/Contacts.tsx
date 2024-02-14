import { contacts } from "../controllers/contactsController";
import { Contact } from "./Contact";

export const Contacts = () => {
  return <ul id="contacts"> {contacts.map((c) => Contact(c))} </ul>;
};
