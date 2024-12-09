import express from "express";
import { contacts } from "./db/contacts.js";
// import contacts from "./db/contacts.json" assert { type: "json" }; // ! import from json needs: assert { type: "json" }
console.log("contacts:::", contacts);

const app = express();
const port = 3002;

app.get("/contacts", (req, res) => {
  // res.send(contacts); // automatically convert to JSON-string

  const responseDatabase = null;
  // res.send(responseDatabase); // nothing will come in response from db, because .send() can't  handle "null"
  res.json(responseDatabase); // will come "null"

  // res.json(contacts);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
