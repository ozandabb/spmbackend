
module.exports = (sequelize, Sequelize) => {
    const Subject = sequelize.define("subject", {
        year: {
            type: Sequelize.INTEGER,
            allowNull: false,
            
        },
        semester: {
            type: Sequelize.STRING,
            allowNull: false,

        },
        name: {
            type: Sequelize.STRING,
            allowNull: false

        },
        code: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lechours: {
            type: Sequelize.INTEGER,
        },
        tutehours: {
            type: Sequelize.INTEGER,
           
        },
        labhours: {
            type: Sequelize.INTEGER,
        },
        evaluationhour: {
            type: Sequelize.INTEGER,
           
        },
    });

    return Subject;
};