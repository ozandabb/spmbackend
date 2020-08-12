const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.lecturer = require("./lecturer.model")(sequelize, Sequelize);
db.session = require("./session.model")(sequelize, Sequelize);
db.student = require("./student.model")(sequelize, Sequelize);
db.subject = require("./subject.model")(sequelize, Sequelize);





module.exports = db;