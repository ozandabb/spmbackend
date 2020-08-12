
module.exports = (sequelize, Sequelize) => {
    const Sessions = sequelize.define("sessions", {
        oid: {
            type: Sequelize.INTEGER,
            allowNull: false,
            
        },
        amount: {
            type: Sequelize.STRING,
            allowNull: false,

        },
        advance: {
            type: Sequelize.STRING,
            allowNull: true

        },
        quntity: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        reciptNo1: {
            type: Sequelize.STRING,
        },
        payment2: {
            type: Sequelize.STRING,
           
        },
        reciptNo2: {
            type: Sequelize.STRING,
        },
        payment3: {
            type: Sequelize.STRING,
           
        },
        reciptNo3: {
            type: Sequelize.STRING,
        },
        balance: {
            type: Sequelize.STRING,
            
        },
        readydate: {
            type: Sequelize.DATE,
            
        },
        deliverdate: {
            type: Sequelize.DATE,
            
        },
        remark: {
            type: Sequelize.STRING,
            
        },


      
    });

    return Sessions;
};