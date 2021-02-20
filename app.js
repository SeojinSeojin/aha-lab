import express from "express"
import helmet from "helmet"
import mongoose from 'mongoose'
import session from "express-session"
import MongoStore from "connect-mongo"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import my_router from "./router"

const app = express();
const CookieStore = MongoStore(session);

const db = require("./db.js");

app.use(helmet());
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/statics"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db();

app.use(
    session({
        secret: "tjwls@#@",
        resave: true,
        saveUninitialized: false,
        store: new CookieStore({ mongooseConnection: mongoose.connection }),
    })
)

app.use("/", my_router);

export default app;