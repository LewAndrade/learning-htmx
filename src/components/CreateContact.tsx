export const CreateContact = () => (
  <form hx-post="/contacts" hx-target="#contacts" hx-swap="outerHTML">
    <div>
      <label>First Name</label>
      <input type="text" name="firstName" value="" placeholder="First Name" />
    </div>
    <div class="form-group">
      <label>Last Name</label>
      <input type="text" name="lastName" value="" placeholder="Last Name" />
    </div>
    <div class="form-group">
      <label>Email Address</label>
      <input type="email" name="email" value="" placeholder="Email" />
    </div>
    <button class="btn">Submit</button>
  </form>
);
