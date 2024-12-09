// # Creating web-server using the "express" package (expressjs.com)

import express from "express";

const app = express(); // app - it is web-server, that created using express package.
const port = 3001;

// First arg - the route, second arg - callback fn, that running for this route.
app.get("/", (req, res) => {
  // req - object with request information (body, address, method, etc.)
  // res - object of response from server (allows to configure and send response)
  res.send("<h2>Home page</h2>");
});

app.get("/contacts", (req, res) => {
  console.log("req.url", req.url); // address of request
  console.log("req.method", req.method); // method of request
  res.send("<h2>Contacts page</h2>");
});

// Starting web-server (app). Second argument - it is fn, that run when web-server successfully started
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
