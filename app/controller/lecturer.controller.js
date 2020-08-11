const db = require("../model/index.model");
const Lecturer = db.lecturer;
const Op = db.Sequelize.Op;





// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
// this is  a sample please remove this after you get the code
// ----------------------------------------------------------------------------------------------------------------


// create user
exports.addItem = async (req, res) => {
    console.log("ITEM>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log(req.body);
    // Validate request
    if (req.body.oid == null || req.body.amount == null) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Tutorial
    const lecturer = {
        oid: req.body.oid,
        quntity: req.body.quntity,
        amount: req.body.amount,
        advance: req.body.advance,
        reciptNo1: req.body.reciptNo1,
        payment2: req.body.payment2,
        reciptNo2: req.body.reciptNo2,
        payment3: req.body.payment3,
        reciptNo3: req.body.reciptNo3,
        balance: req.body.balance,
        readydate: req.body.readydate,
        deliverdate: req.body.deliverdate,
        remark: req.body.remark,
       

    };

    // Save Tutorial in the database
    Lecturer.create(lecturer)
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






