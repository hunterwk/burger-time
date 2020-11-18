const express = require("express");
const burger = require("../models/burger.js")
const router = express.Router();


router.get("/", (req, res) => {
    res.redirect("/burgers");
  });


router.get("/burgers", (req, res) => {
    burger.all((burgerData) => {
        res.render("index", {burger_data: burgerData}) //use destructuring
    });
});

router.post("/burgers/create", (req, res) => {
    burger.create ({ burger_name: req.body.name}, (result) => {
        res.json({id: result.insertId})
    })
});

router.put("/burgers/:id/devoured", (req, res) => {
    const condition = {id: req.params.id};
    const update = {devoured: req.body.value};

    burger.update(update, condition, (result) => {
        if(result.affectedRows === 0 ) {
            return res.status(404).end();
        }
        
    })
})

module.exports = router;