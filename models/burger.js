const orm = require("../config/orm.js");

const burger = {
    all: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    create: (name, cb) => {
        orm.insertOne("burgers", {burger_name: name, devoured: false}, cb);
    },
    update: ( id, cb) => {
        orm.updateOne("burgers", {devoured: true}, {id}, cb)
        },
    }

module.exports = burger;