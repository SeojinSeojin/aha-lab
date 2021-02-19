import express from "express"
import helmet from "helmet"
import my_router from "./router"

const app = express();

app.use(helmet());
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/statics"))

app.use("/", my_router);

module.exports = app;