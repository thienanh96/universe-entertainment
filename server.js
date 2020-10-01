const express = require("express");
const next = require("next");

const cors = require("cors");
const bodyParser = require("body-parser");
const qs = require("qs");
const useragent = require("express-useragent");
const cookieSession = require("cookie-session");

const config = require("./server/config.json");
const port = config.port;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const api = require("./server/routers");

app.prepare().then(() => {
  const server = express();

  server.use(
    cookieSession({
      name: config.session.cookieName,
      secret: config.session.cookieSecret,
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    })
  );

  server.set("query parser", function(str) {
    return qs.parse(str, {
      decoder: function(s) {
        return decodeURIComponent(s);
      }
    });
  });

  server.get("/healthz", (req, res) => {
    res.status(200).send("healthz");
  });

  server.enable("trust proxy");

  // TODO: receiving 502 error when accessing https://dev-csso-app-veritone.com/
  if (config.nodeEnv === "production") {
    server.get("*", function(req, res, next) {
      if (req.secure) {
        next();
      } else {
        res.redirect("https://" + req.headers.host + req.url);
      }
    });
  }
  server.use(useragent.express());
  server.use(bodyParser.json()); // to support JSON-encoded bodies
  server.use(
    bodyParser.urlencoded({
      // to support URL-encoded bodies
      extended: true
    })
  );
  server.use(cors());

  //This is handels api
  server.use("/api", api);


  // This handles all standard next.js path-based routing
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, async err => {
    process.on("unhandledRejection", (reason, p) => {
      console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
      // Stack Trace
      console.log(reason.stack);
    });

    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});