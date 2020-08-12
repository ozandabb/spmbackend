
module.exports = (sequelize, Sequelize) => {
    const Lecturer = sequelize.define("lecturer", {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique:true
            
        },
        empId: {
            type: Sequelize.STRING,
            allowNull: false,
            unique:true

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
            allowNull: false,
        },
        building: {
            type: Sequelize.STRING,
            allowNull: false,
           
        },
        level: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        rank: {
            type: Sequelize.STRING,
            allowNull: false,

           
        },
        image: {
            type: Sequelize.STRING,
            allowNull: true,

        },
    });

    return Lecturer;
};