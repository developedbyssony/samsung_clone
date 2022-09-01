const express = require('express');
const cookieParser = require('cookie-parser'); 
const session = require('express-session');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const fs = require('fs');

const http =require('http');
const mysql2 = require('mysql2');
const path = require("path");
const url = require('url');


const mybatisMapper = require("mybatis-mapper");
mybatisMapper.createMapper(['./xml/testMapper.xml']); 

const Connection = mysql2.createConnection({
  host:'localhost',
  user:'root',
  port:'3306',
  password:'mysql@!####',
  database: 'new_schema'
});

exports.Select = async function(request, response) {
    const _url = request.url;
    const pathname = url.parse(_url, true).pathname;
    url_parsed = pathname.split('/');

    if(url_parsed[1] === 'my' || url_parsed[1] === 'update') {
        const uid = request.session.uid;
        var param = {
            'param' : uid
        }
        var format = {language:'sql', indent:' '};
        var query = mybatisMapper.getStatement('testMapper', 'testBasic1', param, format); // name, id, parameter, format
        console.log(query);
        Connection.connect();
        Connection.query(query,function(error,result, fields) {
        if(error) {
            console.log(error);
        }
        console.log(JSON.stringify(result));
        console.log('회원 정보 조회 완료');
        });

        Connection.end();
    } else {
        console.log('err');
    }
}

exports.Update = async function(request,response) {
    console.log('<<<<<<user-info-service 진입>>>>>>');
    const _url = request.url;
    const pathname = url.parse(_url, true).pathname;
    url_parsed = pathname.split('/');
    const uid = request.session.uid;

    // 1) 조회
    var param = {'param' : uid}
    var format = {language:'sql', indent:' '};
    var query = mybatisMapper.getStatement('testMapper', 'testBasic1', param, format); // name, id, parameter, format
    console.log(query);
    Connection.connect();
    Connection.query(query,function(error,result, fields) {
    if(error) {
            console.log(error);
    }
    var data = JSON.stringify(result);
    console.log(data);
    console.log('회원 정보 조회 완료');
    });

    // 2) 수정
    if(url_parsed[1] === 'update') {
        const uid = request.session.uid;

        let param = {
            'id' : uid,
            'password' : data[0].upassword || request.body.password || undefined,
            'phoneNum' : data[0].phoneNum || request.body.phoneNum || undefined,
            'address' : data[0].address || request.body.address || undefined
        }

        let format = {language:'sql', indent:' '};
        let query = mybatisMapper.getStatement('testMapper', 'testBasic3', param, format); // name, id, parameter, format
        Connection.query(query,function(error,result, fields) {
            if(error) {
                console.log(error);
            }
            console.log('수정완료');
        })
    }
}


        /* 마이 바티스 연동 전 코드 
        if(param.password != undefined && pram.address != undefined && param.phoneNum != undefined) {
            let query = "UPDATE userTable2 SET upassword = '" + param.password + "',address = '" + param.address + "',phoneNum= '" + param.phoneNum + "' WHERE email = '" + uid + "';";
            console.log("쿼리문 확인 :" + query);

        } else if (param.password != undefined) {
            let query = "UPDATE userTable2 SET upassword = '" + param.password + "' WHERE email = '" + uid + "';";
            console.log("쿼리문 확인 :" + query);

        } else if (param.phoneNum != undefined) {
                let query = "UPDATE userTable2 SET phoneNum= '" + param.phoneNum + "' WHERE email = '" + uid + "';";
                console.log("쿼리문 확인 :" + query);

        } else if(param.address != undefined) {
                let query = "UPDATE userTable2 SET address = '" + param.address + "' WHERE email = '" + uid + "';";
                console.log("쿼리문 확인 :" + query);

        } 
        */

exports.Delete = async function(request,response) {

    console.log('<<<<<<user-info-service 진입>>>>>>');
    const _url = request.url;
    const pathname = url.parse(_url, true).pathname;
    url_parsed = pathname.split('/');
    
    if(url_parsed[1] === 'delete') {
        const uid = request.session.uid;
        var param = {
            'param' : uid
        }
        var format = {language:'sql', indent:' '};
        var query = mybatisMapper.getStatement('testMapper', 'testBasic', param, format); // name, id, parameter, format

    }
    console.log(query);
        Connection.connect();
        Connection.query(query,function(error,result, fields) {
        if(error) {
            console.log(error);
        }
        console.log(JSON.stringify(result));
        console.log('회원 정보 삭제 완료');
        // 쿠키 삭제
        request.clearCookie('uid');
        console.log('쿠키 삭제 완료');

        // 세션 삭제
        const session = request.session;
        try {
        if (session) {
            request.session.destroy();
            console.log('세션 삭제 완료');
        } else {
            console.log('세션이 없습니다.');
        }} catch(e) {
        console.log(e);}
        })
        Connection.end();
}
    
    /*
    const uid = request.session.uid;

    var query = "DELETE FROM userTable2 WHERE email = '" + uid + "';";
    console.log("쿼리문 확인 :" + query);

    db.query(query, function(err, data) {
        if (!err) {
            console.log('회원 정보 삭제 완료');
            }
         else {
            console.log('err');
        }
    });
    */


/*
exports.Select = async function(request,response, data) {
    console.log('<<<<<<user-info-service 진입>>>>>>');     
    const uid = request.session.uid;

    // 1) 세션에 저장된 아이디 확인하여 쿼리문 날리기
    var query = "SELECT * FROM userTable2 WHERE email = '" + uid + "';";
    console.log("쿼리문 확인 :" + query);

    db.query(query, (err, data) => {
        if (!err) {
            // or 연산자 사용 (바디이거나 쿼리)
            /*
            fs.readFile('/update', 'UTF-8',
            function(err,data){
                response.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
                resopnese.write('hello wolrd');
                response.end(ejs.render(data, {
                    data:cursor
                }));
            });
      
            var paramId = request.body.id || data[0].email;
            var paramPassword = request.body.password || data[0].upassword;
            var paramName = request.body.name || data[0].uname;
            var paramAddress = request.body.address || data[0].address;
            var paramPhoneNum = request.body.phoneNum || data[0].phoneNum;
            console.log(paramId); //확인됨
            console.log('회원 정보 조회 완료');
            }
         else {
            console.log('err');
        }
    });

    /*
    // + 리스트에 담기
    var userList = {
            list : function(request, response) {
            db.query(sql,function(err,results,field){
                response.render(__dirname + '/views/my.html', 
                { data : 'testData list ejs',
                  userList : results });
            });
        }
    };
    */
