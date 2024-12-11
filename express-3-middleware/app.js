import express from "express";
import { contacts } from "./db/contacts.js";
import { DateTime } from "luxon";
import fs from "fs/promises";
import cors from "cors";

const app = express();
const port = 3003;

//  * add middleware
// app.use("", () => {}); - standard form

// If .use() without first argument, it will execute for any request:
app.use((req, res, next) => {
  console.log("First middleware :>> ");
  // If you will not send answer (res.json or res.send) the code will be stopped.
  // But if you not need send any response? In this case for code continuation you must write special fn - next()
  next();
});

app.use((req, res, next) => {
  console.log("Second middleware :>> ");
  next();
});

// # Middleware for logging:
app.use(async (req, res, next) => {
  // console.log("app.use >> req:::", req);
  // const my = JSON.stringify(req);

  const { method, url } = req;
  const dt = DateTime.now();
  const logTime = dt.toFormat("dd.mm.yyyy, HH:mm:ss");
  await fs.appendFile("./public/server.log", `${method}, ${url}, ${logTime}\n`);
  // await fs.appendFile("./public/req.log", `${my}\n`);
  next();
});

// # Middleware for start frontend and backend on one PC (using "cors" package)
// const corsMiddleware = cors();
// app.use(corsMiddleware);
app.use(cors()); // short note

//~ Standard requests
app.get("/contacts", (req, res) => {
  res.json(contacts);
});

app.get("/products", (req, res) => {
  res.json([]);
});
//~ END Standard requests

// # Middleware for handling missing route
app.use(async (req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(port, () => {
  console.log(`start on port ${port}`);
});
