const express = require("express");
const burger = require("../models/burger.js")
const router = express.Router();

router.get("/", (req, res) => {
    burger.all((data) => {
        const burgerObject = {
            burgers: data,
        };
        res.render("index", burgerObject)
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create ({ burger_name: req.body.name}, (result) => {
        res.json({id: result.insertId})
    })
});

router.put("/api/burgers/:id/devoured", (req, res) => {
    const condition = {id: req.params.id};
    const update = {devoured: req.body.value};

    burger.update(update, condition, (result) => {
        if(result.affectedRows === 0 ) {
            return res.status(404).end();
        }
        
    })
})