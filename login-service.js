const db = require('./database.js');
const path = require('path');
const http =require('http');
const ejs = require('ejs');
const express = require('express');

const server = express(); 


exports.LoginCheck = async function(request,response) {

    console.log('<<<<<<login-service 진입>>>>>>');

    const id = request.body.id;
    const password = request.body.password;

    var query = "SELECT * FROM userTable2 WHERE email = '" + id + "';";
    console.log("쿼리문 확인 :" + query);

    db.query(query, function (err, rows, data) {
        if (!err) {
            console.log('쿼리 실행 완료');
            
            if(rows[0]) {
                const msg = document.getElementById('msg');
                var userIdCheck = rows[0].email;
                var userPasswordCheck = rows[0].upassword;
        
                if(userPasswordCheck != password) {
                      msg.innerText = PW_ERROR_MSG[isValidPw]
                    } else {
                    response.cookie('uid',id, { 
                        httpOnly:true,
                        maxAge: 1000 * 60 * 60 * 24 * 7});
                    console.log("쿠키 발급 완료");         
    
                    request.session.uid = id;
                    request.session.save(() => {
                    console.log("세션 발급 완료");});

                    console.log("로그인 성공");

                    response.render(__dirname + '/views/main/index_로그인.html');
                }
            } else {
                    msg.innerText = ID_ERROR_MSG[isValidId]
            } 
        }
    });
};