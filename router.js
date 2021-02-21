import express from "express";
import ConsultModel from "./models/Consult"

const my_router = express.Router();

my_router.get("/", (req, res) => {
    res.render("home.ejs")
})

my_router.get("/people", (req, res) => {
    res.render("people.ejs")
})

my_router.get("/research", (req, res) => {
    res.render("research.ejs")
})

my_router.get("/publication", (req, res) => {
    res.render("publication.ejs")
})

my_router.get("/software", (req, res) => {
    res.render("software.ejs")
})

my_router.get("/assessment", (req, res) => {
    res.render("assessment.ejs")
})

my_router.get("/consulting", (req, res) => {
    res.render("consulting.ejs")
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
    if (pw == "1234") {
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

module.exports = my_router