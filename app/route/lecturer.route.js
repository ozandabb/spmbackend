module.exports = app => {
    const item = require("../controller/lecturer.controller");

    var router = require("express").Router();

    // Create a new Lecturer
    router.post("/add", item.add_lecturer);
    // Edit Lecturer
    router.post("/edit", item.edit_lecturer);




    app.use('/api/lecturer', router);
};