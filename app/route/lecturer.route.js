module.exports = app => {
    const item = require("../controller/item.controller");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/additem", item.addItem);




    app.use('/api/item', router);
};