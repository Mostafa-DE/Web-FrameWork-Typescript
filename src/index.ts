import { UserForm } from "../views/UserForms";
import { User } from "../models/User";

const user = User.buildUser({ name: "NAME", age: 20 });

const root = document.querySelector("#root");

if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
} else {
  throw new Error("Root Element Not Found !! ");
}
