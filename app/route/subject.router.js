module.exports = app => {
    const subject = require("../controller/subject.controller");

    var router = require("express").Router();

    // Create a new subject
    router.post("/add", subject.add_subject);
    // Edit subject
    router.post("/edit", subject.edit_subject);
    // Delete subject
    router.post("/delete", subject.delete_subject);




    app.use('/api/subject', router);
};