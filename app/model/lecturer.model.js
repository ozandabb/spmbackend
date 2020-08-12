
module.exports = (sequelize, Sequelize) => {
    const Lecturer = sequelize.define("lecturer", {
        name: {
            type: Sequelize.INTEGER,
            allowNull: false,
            
        },
        empId: {
            type: Sequelize.STRING,
            allowNull: false,

        },
        faculty: {
            type: Sequelize.STRING,
            allowNull: false

        },
        department: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        center: {
            type: Sequelize.STRING,
        },
        building: {
            type: Sequelize.STRING,
           
        },
        level: {
            type: Sequelize.STRING,
        },
        rank: {
            type: Sequelize.STRING,
           
        },
    });

    return Lecturer;
};