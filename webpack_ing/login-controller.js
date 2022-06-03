const serviceMain = require('./login-service');

exports.LoginCheck = async function(request, response) {

    console.log('<<<<<<login-controller 진입>>>>>>');

    var result = serviceMain.LoginCheck(request);
    
    const uid = request.body.id;
    console.log("user의 id :" + uid);
};


