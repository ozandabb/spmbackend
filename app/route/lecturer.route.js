module.exports = app => {
    const lecturer = require("../controller/lecturer.controller");

    var router = require("express").Router();

    // Create a new Lecturer
    router.post("/add", lecturer.add_lecturer);
    // Edit Lecturer
    router.post("/edit", lecturer.edit_lecturer);
    // Delete Lecturer
    router.post("/delete", lecturer.delete_lecturer);




    app.use('/api/lecturer', router);
};