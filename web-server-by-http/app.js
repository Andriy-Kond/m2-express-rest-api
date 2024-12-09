import http from "http";
import express from "express";

// Creating http-server using the build-in package "http" (difficult to use)
const server = http.createServer((req, res) => {
  const { url } = req;

  if (url === "/") {
    res.write("<h2>Home page</h2>");
  } else if (url === "contacts") {
    res.write("<h2>Contacts page</h2>");
  } else {
    res.write("<h2>Page not found</h2>");
  }
  res.end();
});

// More convenient to use other packages. For example "express" (expressjs.com).
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
