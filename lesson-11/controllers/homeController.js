// homeController.js
"use strict";

/**
 * Listing 10.2 (p. 159)
 * 컨트롤러 동작에 의한 뷰 렌더링
 */
exports.respondWithName; // @TODO: 사용자 정의 EJS 뷰를 사용한 응답

/**
 * Listing 10.3 (p. 160)
 * 뷰로의 라우트 매개변수 전달
 */
exports.respondWithName = (req,res) =>   {
    let paramsName =req.params.myName
    res.render('index', {
        name:paramsName,
        people:{ 
            first:{
                name:"mary",
                city:"jeonju"
            },
            second:{
                name:"ju",
                city:"ko"
            }
        }
    });
}; // @TODO: 요청 매개변수로 지역 변수 할당. 그다음 렌더링된 뷰로 지역 변수 전달.

exports.gethome;