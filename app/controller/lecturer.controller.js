const db = require("../model/index.model");
const Lecturer = db.lecturer;
const Op = db.Sequelize.Op;

// create user
exports.add_lecturer = async (req, res) => {
    console.log(req.body);
    // Validate request
    if (req.body.empId == null || req.body.empId == undefined) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Tutorial
    const lecturer = {
        name: req.body.name,
        empId: req.body.empId,
        faculty: req.body.faculty,
        department: req.body.department,
        center: req.body.center,
        building: req.body.building,
        level: req.body.level,
        rank: req.body.rank,
        image: req.body.image

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



exports.edit_lecturer = async (req, res) =>{

    if (req.body.empId == null || req.body.empId == undefined) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const update_result = await Lecturer.update(  
         {name: req.body.name, faculty:  req.body.faculty, department:  req.body.department, center:  req.body.center, building:  req.body.building, level:  req.body.level,rank:  req.body.rank,image:  req.body.image },  
         {where: { empId: req.body.empId}}    
          ) .then(result =>
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






