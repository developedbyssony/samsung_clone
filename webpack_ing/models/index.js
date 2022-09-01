const Sequelize = require('sequelize');
const User = require('./User');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config')[env];

const db = {};

const sequelize = new Sequelize({
  host:'localhost',
  username:'root',
  password:'mysql@!####',
  port:'3306',
  database: 'new_schema',
  dialect:'mysql'
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;

//User.init(sequelize);

module.exports = db;

