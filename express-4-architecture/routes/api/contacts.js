import { contacts } from "../../db/contacts.js";
import express from "express";

// Create not new "notebook", but one page of "notebook" (express.Router()) and export it to main "notebook".
export const router = express.Router();

// When you showed in main "notebook" route "/api/contacts" you no longer need to specify it on this page again.
// That is instead writing:
//$ router.get("/api/contacts/:id", (req, res) => res.json(contacts[0])};
// you can write it like this:
//$ router.get("/:id", (req, res) => res.json(contacts[0]));

router.get("/", (req, res) => {
  res.json(contacts);
});

router.get("/:id", (req, res) => {
  res.json(contacts[0]);
});

router.post("/", (req, res) => {
  res.json(contacts[0]);
});

router.put("/:id", (req, res) => {
  res.json(contacts[0]);
});

router.delete("/:id", (req, res) => {
  res.json(contacts[0]);
});
