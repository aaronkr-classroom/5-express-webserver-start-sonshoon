// homeController.js
"use strict";

/**
 * Listing 9.6 (p. 153)
 * 콜백 함수를 homeController.js의 홈 컨트롤러로 이동
 */
// @TODO: exports 객체를 사용해 sendReqParam 함수를 모듈로 내보낸다
exports.sendReqParam = (req,res) =>{
    let item = req.params.item.toUpperCase();
    res.send(`this is ${item} page`);
}; // 지정 라우트 요청 처리를 위한 함수 생성
exports.sendUserParam = (req,res) =>{
    let user = req.params.user.toUpperCase();
    res.send(`this is ${user} page`);
}; // 지정 라우트 요청 처리를 위한 함수 생성
exports.sendCourseParam = (req,res) =>{
    let course = req.params.course.toUpperCase();
    res.send(`this is ${course} page`);
}; // 지정 라우트 요청 처리를 위한 함수 생성
/**
 * 다른 라우트를 옮기기
 */
exports.getHome = (req,res) => {
    res.send('<h1>this is the homepage.</h1>');
}; // @TODO: exports 객체를 사용해 getHome 함수를 모듈로 내보낸다
exports.getContact = (req,res) => {
    res.send('<h1>this is the contact page.</h1>');
}; // @TODO: exports 객체를 사용해 getContact 함수를 모듈로 내보낸다
exports.postContact = (req,res) => {
    console.log(req.body) ;   
    console.log(req.query);
    res.send('<h1>contact succes.</h1>');
}; // @TODO: exports 객체를 사용해 postContact 함수를 모듈로 내보낸다

// @TODO: exports 객체를 사용해 logRequestPaths 미들웨어 함수를 모듈로 내보낸다
exports.logRequestPaths = (req,res, next) => {
    console.log(`reqest to: ${req.url}`);
    next();
};