const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer((req, res) => {
    const url = req.url;

    const indexPath = path.join(__dirname, "index.html");
    const aboutPath = path.join(__dirname, "about.html");
    const contactPath = path.join(__dirname, "contact-me.html");
    const notfoundPath = path.join(__dirname, "404.html");

    if (url === "/") {
      fs.readFile(indexPath, (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal server error");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      });
    } else if (url === "/about") {
      fs.readFile(aboutPath, (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal server error");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      });
    } else if (url === "/contact") {
      fs.readFile(contactPath, (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal server error");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      });
    } else {
      fs.readFile(notfoundPath, (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal server error");
        } else {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(data);
        }
      });
    }
  })
  .listen(8080, () => {
    console.log("Server is running on 8080");
  });
