module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        fline: {
            type: Sequelize.STRING
        },
        sline: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        postoffice: {
            type: Sequelize.STRING
        },
        telephone1: {
            type: Sequelize.STRING,
            allowNull: false
        },
        telephone2: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        amount: {
            type: Sequelize.STRING,
            allowNull: false
        },
        payment1: {
            type: Sequelize.STRING,
            allowNull: false
        },
        payment2: {
            type: Sequelize.STRING
        },
        payment3: {
            type: Sequelize.STRING
        },
        balance: {
            type: Sequelize.STRING
        },

        reciptNo: {
            type: Sequelize.STRING
        },
        completed: {
            type: Sequelize.BOOLEAN
        },
        remark: {
            type: Sequelize.STRING
        }
    });

    return Student;
};