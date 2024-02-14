import { TContact } from "../types/Contact";

export const Contact = ({ id, firstName, lastName, email }: TContact) => (
  <li hx-target="this" hx-swap="outerHTML">
    <div>
      <div>
        <label>First Name</label>: {firstName}
      </div>
      <div>
        <label>Last Name</label>: {lastName}
      </div>
      <div>
        <label>Email</label>: {email}
      </div>
      <button hx-get={`/contact/${id}/edit`} class="btn btn-primary">
        Click To Edit
      </button>
      <button hx-delete={`/contact/${id}`} class="btn btn-primary">
        Click To Remove
      </button>
    </div>
  </li>
);
