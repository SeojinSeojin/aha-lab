import express from "express";
import BoardModel from "./models/Board";
import ConsultModel from "./models/Consult"

const my_router = express.Router();

my_router.get("/", (req, res) => {
    res.render("home.ejs")
})

my_router.get("/people", (req, res) => {
    res.render("people.ejs")
})

my_router.get("/research-publication", (req, res) => {
    res.render("research-publication.ejs")
})

my_router.get("/software", (req, res) => {
    res.render("software.ejs")
})

my_router.get("/assessment", (req, res) => {
    res.render("assessment.ejs")
})

my_router.get("/consulting", (req, res) => {
    res.render("consulting.ejs", { isLoggedIn: req.session.isLoggedIn })
})

my_router.post("/consulting/create", (req, res) => {
    console.log("POST /consulting/create\n", req.body)
    const consult = new ConsultModel({
        telephone: req.body.telephone,
        name: req.body.name,
        origin: req.body.origin,
        content: req.body.content
    });

    consult.save((err) => {
        if (err) {
            console.log(err);
            res.render("/");
        } else {
            res.redirect("/consulting")
        }
    })
})

my_router.get("/consulting/admin", (req, res) => {
    if (req.session.isLoggedIn) {
        ConsultModel.find({}, (err, consults) => {
            res.render("consulting-admin.ejs", { consults: consults })
        })
    } else {
        res.redirect("/");
    }
})

my_router.post("/login", (req, res) => {
    const pw = req.body.pw
    console.log(pw);
    if (pw == process.env.PW) {
        req.session.isLoggedIn = true;
        res.json({
            isSuccess: true,
            code: 200,
            message: "로그인 성공"
        })
    } else {
        res.json({
            isSuccess: true,
            code: 202,
            message: "비밀번호가 잘못되었습니다"
        })
    }
})

my_router.get("/board", (req, res) => {
    BoardModel.find({}, (err, boards) => {
        res.render("board.ejs", { isLoggedIn: req.session.isLoggedIn, boards: boards })
    })
})

my_router.post("/board/create", (req, res) => {
    console.log("POST /consulting/create\n", req.body)
    const board = new BoardModel({
        url: req.body.url,
        comment: req.body.comment,
    });
    board.save((err) => {
        if (err) {
            console.log(err);
            res.sendStatus(400);
        } else {
            res.sendStatus(200);
        }
    })
})

module.exports = my_router