const serviceMain = require('./join-service');

exports.SignUp = async function(request, response) {
    console.log('<<<<<<join-controller 진입>>>>>>');
    var result = serviceMain.SignUp(request);
    console.log('<<<<<<join 기능 비즈니스 로직 처리 완료>>>>>>');
    return result;
};