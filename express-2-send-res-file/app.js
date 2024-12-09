import express from "express";
import { contacts } from "./db/contacts.js";
// import contacts from "./db/contacts.json" assert { type: "json" }; // ! import from json needs: assert { type: "json" }

const app = express();
const port = 3002;

app.get("/contacts", (req, res) => {
  // res.send(contacts); // automatically convert to JSON-string

  const responseDatabase = null;
  // res.send(responseDatabase); // The DB will send null, but you nothing will get in response, because .send() can't process "null"
  res.json(responseDatabase); // You will get "null" from DB in response.

  // res.json(contacts);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
