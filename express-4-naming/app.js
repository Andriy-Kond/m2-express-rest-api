import express from "express";
import cors from "cors";

// Import one page of "notebook"
import { router as contactsRoutes } from "./routes/api/contacts.js";

const app = express(); // creating "notebook"
const port = 3004;

app.use(cors());

// Indicate that all requests that will be to api/contacts you must search here:
app.use("/api/contacts", contactsRoutes);

app.listen(port, console.log(`Server started on port ${port}:>>`));
