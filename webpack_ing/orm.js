const mysql2 = require('mysql2');
const path = require("path");

const mybatisMapper = require("mybatis-mapper");
const Connection = mysql2.createConnection({
  host:'localhost',
  user:'root',
  port:'3306',
  password:'1234',
  database: 'new_schema'
});

mybatisMapper.createMapper(['./testMapper.xml']); 

// 조회할 파라미터
var param = {
  user_num : 3
}

var format = {language:'sql', indent:' '};
var query = mybatisMapper.getStatement('testMapper', 'testBasic', param, format); // name, id, parameter, format

console.log(query);

Connection.connect();
Connection.query(query,function(error,result, fields) {
  if(error) {
    console.log(error);
  }
  console.log(result);
});

Connection.end();