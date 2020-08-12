const db = require("../model/index.model");
const Subject = db.subject;
const Op = db.Sequelize.Op;

// create user
exports.add_subject = async (req, res) => {
    console.log(req.body);
    // Validate request
    if (req.body.code == null || req.body.code == undefined) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Tutorial
    const subject = {
        year: req.body.year,
        semester: req.body.semester,
        name: req.body.name,
        code: req.body.code,
        lechours: req.body.lechours,
        tutehours: req.body.tutehours,
        labhours: req.body.labhours,
        evaluationhour: req.body.evaluationhour,

    };
    // Save Tutorial in the database
    Subject.create(subject)
        .then(data => {
            res.status(200).send({
                data:
                    data
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};



exports.edit_subject = async (req, res) => {

    if (req.body.code == null || req.body.code == undefined) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const update_result = await Subject.update(
        { year: req.body.year, semester: req.body.semester, name: req.body.name, lechours: req.body.lechours, tutehours: req.body.tutehours, labhours: req.body.labhours, evaluationhour: req.body.evaluationhour},
        { where: { code: req.body.code } }
    ).then(result =>
        res.status(200).send({
            message: "Successfully update"
        })
    )
        .catch(err =>
            res.status(400).send({
                message: err
            })
        )


}


exports.delete_subject = async (req, res) => {
    if (req.body.code == null || req.body.code == undefined) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    var result = await Subject.destroy({
        where: {
            code: req.body.code
        }
    })
    if (result !== 1) {
        res.status(400).send({
            message: "No Found"
        });
    }
    res.status(400).send({
        message: "Deleted success"
    });

}



