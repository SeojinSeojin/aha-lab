import express from "express";

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

module.exports = my_router