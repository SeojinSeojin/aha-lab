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
    ConsultModel.find({}, (err, consults) => {
        res.render("consulting-admin.ejs", { consults: consults })
    })
})

module.exports = my_router