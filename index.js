import { URL } from "node:url";
import http from "node:http";
import fs from "node:fs";

const App = (function () {
  let server = null;

  function serve() {
    server = http.createServer();
    server.on("request", (req, res) => {
      //const path = new URL(req.url).pathname;
      let fileName = "";
      let file = null;

      switch (req.url) {
        case "/":
          fileName = "./index.html";
          file = fs.readFileSync(fileName);
          break;

        case "/about":
          fileName = "./about.html";
          file = fs.readFileSync(fileName);
          break;
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(file);
    });

    server.listen(8000, () => {
      console.log("Server running.");
    });
  }

  return { serve };
})();

App.serve();
