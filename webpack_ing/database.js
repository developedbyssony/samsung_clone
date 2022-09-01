const sql = require('mysql2');

const con = sql.createConnection({
    host:'localhost',
    user:'root',
    password:'mysql@!####',
    port:'3306',
    database: 'new_schema'
  });

  
con.connect(function(err) {
    if(err) {
        console.error('mysql connection error');
        console.error(err);
    } else {
        console.log("DB연결 성공");
    }
  });

  module.exports = con;