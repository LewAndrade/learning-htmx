import { TContact } from "../types/Contact";

export const EditContact = ({ id, firstName, lastName, email }: TContact) => (
  <form hx-put="/contact/1" hx-target="this" hx-swap="outerHTML">
    <div>
      <label>First Name</label>
      <input type="text" name="firstName" value={firstName} />
    </div>
    <div class="form-group">
      <label>Last Name</label>
      <input type="text" name="lastName" value={lastName} />
    </div>
    <div class="form-group">
      <label>Email Address</label>
      <input type="email" name="email" value={email} />
    </div>
    <button class="btn">Submit</button>
    <button class="btn" hx-get={`/contact/${id}`}>
      Cancel
    </button>
  </form>
);
