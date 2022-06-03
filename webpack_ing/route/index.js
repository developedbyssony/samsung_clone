const express =require('express');
const router =require('express').Router();
const http =require('http');
const path =require('path');

const cookieParser = require('cookie-parser'); 
const session = require('express-session');


const LoginController = require('./login-controller.js');
const SignUpController = require('./join-controller.js');
const UserInfoController = require('./user-info-controller.js');
const { ThemeConsumer } = require('react-bootstrap/esm/ThemeProvider');


/*
router.use(express.static('views'));
router.use(router.json()); 
*/

router.use(cookieParser()); 
router.use(session({
    secret: '12345',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

router.get("/", function (request, response) { 
    response.send('<h1>localhost:8181 접속시</h1>');
}); 

////////////////// 라우팅 /////////////////////
router.get("/main", function (request, response) { 
    response.render(__dirname + '/views/index_20220527_ict.html');
    const id = request.session.uid;
    console.log(id);
});

router.get("/login", function (request, response) { 
    response.render(__dirname + '/views/login.html');
});

router.get("/join", function (request, response) { 
    response.render(__dirname + '/views/join.html');
});

router.get("/my", function (request, response) { 
    var result = UserInfoController.Select(request,response);
    const session = request.session.uid;
    console.log('겟 메소드 실행 : 유저 세션에 들어있는 아이디' + session);
    response.json({ok:true, users: users});
    response.render('my', { session,json } );
});

router.get('/update',async function(request, response){
    /* response.render(__dirname + '/views/update.html'); */
    var result = UserInfoController.Select(request,response);
    const json = request.query.result;
    console.log('json 데이터'+ json);
    response.render('update', json );

    /* response.render('update', { result } ); */
    /*
    fetch('http://localhost:8181/update').then(response => response.json()).then( data => {
        var content = '<h1>${data[0]}</h1>';
        document.querySelector('.right').innerHTML = content;
    }) */
    /* 서버에서 데이터를 받아 json으로 만들어줘야 함 */
    /*
    response.render('update', {
        email: '이메일',
        password: '비밀번호',
        name: '이름',
        address: '주소',
        phoneNum: '폰번호',
    }); */
});

// 4) [ing] 회원 탈퇴 
router.get('/delete',async function(request, response){
    response.render(__dirname + '/views/delete.html');
    var result = await UserInfoController.Delete(request);
});

// 1) 로그인
router.post('/login',async function(request, response){
    var result = await LoginController.LoginCheck(request,response);
    console.log(request.body.id);
    console.log(request.body.password);
    response.sendFile(__dirname + '/views/main.html');
});

// 2) 로그아웃
router.get("/logout", function (request, response) { 
    response.sendFile(__dirname + '/views/logout.html');
    // 쿠키 삭제
    response.clearCookie('userid');
    console.log('쿠키 삭제');

    // 세션 삭제
    const session = request.session;
    try {
        if (session) {
            request.session.destroy();
        } else {
            console.log('세션이 없습니다.');
        }
    }
    catch(e) {
        console.log(e);
    }
});

// 3) 회원 가입
router.post('/join',async function(request, response){
    var result = await SignUpController.SignUp(request,response);
    console.log(request.body.email);
    console.log(request.body.password);
    console.log(request.body.FamilyName);
    console.log(request.body.givenName);
});

router.post('/my',async function(request, response){
    var result = await UserInfoController.Select(request);
    // console.log(request.body.email);
});



// [ing] 5) 회원 정보 수정 
router.post('/update',async function(request, response){
    response.render(__dirname + '/views/update.html');
});
