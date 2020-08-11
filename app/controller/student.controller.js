const db = require("../model/index.model");
const Student = db.student;
const Op = db.Sequelize.Op;


// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
// this is a sample please remove this after you get the code
// ----------------------------------------------------------------------------------------------------------------


// create order
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    console.log(req.body);

    // Create a Tutorial
    const student = {
        name: req.body.name,
        fline: req.body.fline,
        sline: req.body.sline,
        city: req.body.city,
        postoffice: req.body.postoffice,
        telephone1: req.body.telephone1,
        telephone2: req.body.telephone2,
        // date: "2020-05-06",
        date: req.body.date,
        amount: req.body.amount,
        payment1: req.body.payment1,
        payment2: req.body.payment2,
        payment3: req.body.payment3,
        balance: req.body.balance,
        reciptNo: req.body.reciptNo,
        completed: req.body.completed ? req.body.completed : false,
        remark: req.body.remark
    };

    // Save Tutorial in the database
    Student.create(student)
        .then(data => {
            res.status(200).send({
                data:
                    data
            });


        })
        .catch(err => {
            console.log(err);
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

// get latest order number
exports.getLatestOrderNumber = async (req, res) => {


    const result = await Order.findAll({order: [['id', 'DESC']]});
    const data = result[0].dataValues.id
    res.status(200).send({
         result : data

    }
    );
   
};

// get all orders 

exports.getAllorders = async (req ,res) => {
    const result = await Order.findAll({order: [['id', 'DESC']]});
    // console.log(result);
    res.status(200).send(
        result
    );
}