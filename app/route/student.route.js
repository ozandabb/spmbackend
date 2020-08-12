module.exports = app => {
    const order = require("../controller/student.controller");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/create", order.create);
    router.get("/lorder", order.getLatestOrderNumber);
    router.get("/all", order.getAllorders);



    app.use('/api/order', router);
};