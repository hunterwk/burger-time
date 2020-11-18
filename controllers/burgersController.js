const express = require("express");
const burger = require("../models/burger.js")
const router = express.Router();


router.get("/", (req, res) => {
    res.redirect("/burgers");
});


router.get("/burgers", (req, res) => {
    burger.all((burgerData) => {
        res.render("index", { burger_data: burgerData }) //use destructuring
    });
});

router.post("/burgers/create", (req, res) => {
    burger.create( req.body.burger_name, (result) => {
        res.redirect("/burgers");
    })
});

router.put("/burgers/:id/devoured", (req, res) => {
    burger.update(req.params.id, () => {
        res.sendStatus(200);
    })
})

module.exports = router;