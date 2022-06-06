const serviceMain = require('./user-info-service');

// 회원 정보 수정
exports.Update = async function(request, response) {
    console.log('<<<<<<user-info-controller 진입>>>>>>');
    var result = serviceMain.Update(request);
    console.log('<<<<<<user-info 기능 비즈니스 로직 처리(회원 정보 수정) 완료>>>>>>');
};

// 탈퇴
exports.Delete = async function(request, response) {
    console.log('<<<<<<user-info-controller 진입>>>>>>');
    var result = serviceMain.Delete(request);
    console.log('<<<<<<user-info 기능 비즈니스 로직 처리(회원 탈퇴) 완료>>>>>>');
};

exports.Select = async function(request,response) {
    console.log('<<<<<<user-info-controller 진입>>>>>>');
    var result = serviceMain.Select(request);
    console.log('<<<<<<user-info 기능 비즈니스 로직 처리(회원 정보 조회) 완료>>>>>>');
}