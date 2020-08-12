const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');


var PORT = 4000;
// import db
const dbConfig = require('./app/config/db.config');




const app = express();
app.use(morgan('dev'));

const db = require("./app/model/index.model");
db.sequelize.sync({ force: false });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
	res.send('Welcome to Studio Sahasra !!');
})


require("./app/route/lecturer.route")(app);
require("./app/route/student.route")(app);




app.use((req, res, next) => {
	const error = new Error('Not found');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	console.log(error);

	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message,
		},
	});
});


// open server
app.listen(PORT, () => {
	console.log('Server is up and running on port numner ' + PORT);
});
