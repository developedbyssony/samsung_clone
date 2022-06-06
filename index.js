// server
const http =require('http');
const path =require('path');
const express = require('express');
const mysql = require('mysql2');
const async = require('async');

const server = express(); 

const cors = require('cors');

const PORT = 8181;

const cookieParser = require('cookie-parser'); 
const session = require('express-session');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const fs = require('fs');
const { config } = require('bluebird');
const { response } = require('express');
const sequelize = require('./models').sequelize;

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended : true}));

sequelize.sync();

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'1234',
    port:'3306',
    database: 'new_schema'
    });

const mybatisMapper = require("mybatis-mapper");
const Connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    port:'3306',
    password:'1234',
    database: 'new_schema'
});
            
mybatisMapper.createMapper(['./xml/testMapper.xml']); 
            

server.listen(PORT, function() {
    console.log("Listening on port" + `${PORT}`);
    });

//server.use(express.static('server'));

server.use(express.static('views'));
server.use(express.json()); 
server.use(bodyParser.json()); 

server.use(cookieParser()); 
server.use(session({
    secret: '12345',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

server.use('/', express.static(__dirname + '/static')); //-> css, javascript 파일 사용을 위해 기본 path를 /static으로 설정

server.set('views', path.join(__dirname, '/views'));
server.set('view engine', 'html');

nunjucks.configure('views', {
   express:server,
   watch:true, 
});

sequelize.sync({force : false}).then(() => {
        console.log('연결성공');
    }).catch((err) => {
        console.log(`연결실패 -${err}`);
    });

const LoginController = require('./login-controller.js');
const SignUpController = require('./join-controller.js');
const UserInfoController = require('./user-info-controller.js');
const { ThemeConsumer } = require('react-bootstrap/esm/ThemeProvider');
const { pwd } = require('shelljs');
    
server.get("/user-info-api", function (request, response) { 
        var title = null;
        async.waterfall([
        function(callback) {
                title = mysql.escape(request.body.title);
                callback();
        },
        function(callback) {
            if(title !== undefined) {
                const uid = request.session.uid;
                console.log(uid);
                var param = {
                    'param' : uid
                }
                var format = {language:'sql', indent:' '};
                var query = mybatisMapper.getStatement('testMapper','testBasic1', param, format); // name, id, parameter, format
                console.log(query);
                Connection.connect();
                Connection.query(query,function(error,result, fields) {
                    if(error) {
                        console.log(error);
                    }
                    const data = JSON.stringify(result);
                    console.log(JSON.stringify(result));
                    const json = JSON.parse(data);
                    console.log('회원 정보 조회 완료');
                    return response.json({json});
                    });
                } else {
                    console.log('err');
                }
}])
})

server.get("/user-buy-api", function (request, response) { 
    var title = null;
    async.waterfall([
    function(callback) {
            title = mysql.escape(request.body.title);
            callback();
    },
    function(callback) {
    if(title !== undefined) {
        const uid = request.session.uid;
        console.log(uid);
        var param = {
            'param' : uid
        }
        var format = {language:'sql', indent:' '};
        var query = mybatisMapper.getStatement('testMapper','testBasic4', param, format); 

        Connection.connect();
        Connection.query(query,function(error,result, fields) {
                if(!error) {
                const data = JSON.stringify(result);
                console.log(JSON.stringify(result));
                const json = JSON.parse(data);
                console.log('구매 정보 조회 완료');
                return response.json({json});
            } else {
                console.log('잘못된 접근입니다.');
            }
        })
    }
}
])
});


server.get("/", function (request, response) { 
    response.send('<h1>localhost:8181 접속시</h1>');
}); 

// 1)메인페이지
server.get("/main", function (request, response) { 
    const id = request.session.uid;
    console.log(id);
    if (id == undefined) {
        response.render(__dirname + '/views/main/index_비로그인.html');
    } else {
        console.log(id);
        response.render(__dirname + '/views/main/index_로그인.html');
    }
});

// 2)로그인 통합 페이지 -> 로그인, 회원가입로 UX 분기 나뉨
server.get("/main/login", function (request, response) { 
    response.sendFile(__dirname + '/views/login/1/index_login.html');
});

server.get("/main/login/login", function (request, response) { 
    response.render(__dirname + '/views/login/2/index_login_login.html');
});

server.get("/main/login/join", function (request, response) { 
    response.render(__dirname + '/views/join/index.html');
});

// 3)마이 페이지, 마이 - 업데이트 페이지
server.get("/main/my", function (request, response) { 
    var result = UserInfoController.Select(request,response);
    response.render(__dirname + '/views/my/1/index.html');
    /*     
    response.json({ok:true, users: users});
    response.render('my', { session,json } );
    */
});

server.get("/main/my/update", function (request, response) { 
    response.render(__dirname + '/views/my/2/index.html');
});

server.get('/delete',async function(request, response){
    var result = await UserInfoController.Delete(request);
    response.render(__dirname + '/views/delete.html');
});

server.get("/logout", function (request, response) { 
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
        
const returnResult = function(err, res) {
    const result = {};
    if (err) {
        response.status(400);
        result.message = err.stack;
    } else {
        response.status(200);
        result.message = "Success";
    }
    result.status = response.statusCode;
    response.send(result);
}

server.post('/main/login/login',async function(request, response){
    var title = null;
    async.waterfall([
    function(callback) {
            title = mysql.escape(request.body.title);
            callback();
    },
    function(callback) {
    if(title !== undefined) {
            const id = request.body.id;
            const pw = request.body.password;

            console.log(id);
            console.log(pw);

            var param = {
                'param' : id
            }
            var format = {language:'sql', indent:' '};
            var query = mybatisMapper.getStatement('testMapper', 'testBasic1', param, format); 

            Connection.connect();
            Connection.query(query,function(error,result, fields) {
                if(result[0]) {

                    const data = JSON.stringify(result);
                    console.log(JSON.stringify(result));
                    const json = JSON.parse(data);
                    const upw = json[0].upassword;
                    if(pw == upw) {
                        console.log('로그인 성공');

                        response.cookie('uid',id, { 
                        httpOnly:true,
                        maxAge: 1000 * 60 * 60 * 24 * 7});
                        console.log("쿠키 발급 완료");         
        
                        request.session.uid = id;
                        request.session.save(() => {
                        console.log("세션 발급 완료");});

                        response.render(__dirname + '/views/main/index_로그인.html');
                    } else {
                        console.log("비밀번호가 틀렸습니다.");
                        response.render(__dirname + '/views/login/2/index_login_login.html', { 
                            Lid : true,
                            Lpassword : false });
                    }
                } else {
                console.log("아이디가 없습니다.");
                response.render(__dirname + '/views/login/2/index_login_login.html', { 
                    Lid : false,
                    Lpassword : undefined });
            }
        })
    }
}])
});

server.post("/main/login/join", function (request, response) { 
    var result = SignUpController.SignUp(request,response);
    console.log('회원 가입 완료');
    response.render(__dirname + '/views/main/index_비로그인.html');
});

server.post('/main/my/update',async function(request, response){
    var result = await UserInfoController.Update(request);
    console.log('회원 정보 수정 완료');

});


/*
//server.use('/js',express.static('./views/login_page/js'));
//server.use('/css',express.static('./views/login_page/css'));
//server.use(express.static(__dirname + '/public')); -> css, javascript 파일 사용을 위해 기본 path를 /public으로 설정
*/