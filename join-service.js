const db = require('./database.js');

exports.SignUp = async function(request,response) {
    var resultCode = 0; 
    
    console.log('<<<<<<join-service 진입>>>>>>');

    const id = request.body.email;
    const pw = request.body.password;
    const fN = request.body.FamilyName;
    const gN = request.body.givenName;
    console.log(id);
    console.log(pw);
    console.log(fN);
    console.log(gN);
    
    var query = `INSERT INTO userTable2 (email,upassword,familyName,givenName) VALUES ('${id}','${pw}','${fN}','${gN}');`;
    console.log("쿼리문 확인 :" + query);

    db.query(query, (err, data) => {
        if(!err) {
            console.log('쿼리 실행 완료');
        } else {
            console.log('err');
        }
    });
};