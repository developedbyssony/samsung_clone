require('dotenv').config();
const env = process.env;

const development = {
	username: env.MYSQL_USERNAME,
	password: env.MYSQL_PASSWORD,
	database: env.MYSQL_DATABASE,
	host: env.MYSQL_HOST,
	dialect: "mysql",
	//port: env.MYSQL_PORT
  };
/*
if(development) {
	
}*/
  
  const production = {
	username: env.MYSQL_USERNAME,
	password: env.MYSQL_PASSWORD,
	database: env.MYSQL_DATABASE,
	host: env.MYSQL_HOST,
	dialect: "mysql",
	//port: env.MYSQL_PORT
  };
  
  const test = {
	username: env.MYSQL_USERNAME,
	password: env.MYSQL_PASSWORD,
	database: env.MYSQL_DATABASE_TEST,
	host: env.MYSQL_HOST,
	dialect: "mysql",
	//port: env.MYSQL_PORT
  };
  
module.exports = { development, production, test };
	
/*
[
  {
	"development" : [ {
		'host' : 'localhost',
		'port': '3306',
		'password':'1234',
		'username': 'root',
		'database': 'new_schema',
    	'dialect':'mysql'
	}],
	"test" : [ {
		'host' : 'localhost',
		'port': '3306',
		'password':'1234',
		'username': 'root',
		'database': 'new_schema',
    	'dialect':'mysql'
	}],
	"production" : [ {
		'host' : 'localhost',
		'port': '3306',
		'password':'1234',
		'username': 'root',
		'database': 'new_schema',
    	'dialect':'mysql'
	}]
  }
]
*/