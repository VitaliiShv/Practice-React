import { nanoid } from "nanoid";

const items = [
  {
    id: nanoid(),
    text: "Home page",
    link: "/",
  },
  {
    id: nanoid(),
    text: "My books page",
    link: "/my-books",
  },
  {
    id: nanoid(),
    text: "My favorite books page",
    link: "/favorite-books",
  },
  {
    id: nanoid(),
    text: "Contacts page",
    link: "/contacts",
  },
];

export default items;
