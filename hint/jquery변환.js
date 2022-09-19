defer(동기) aSync(비동기) 설명
스크립트 태그가 붙일 수 있는 속성

속성이 없을떄는 동기적으로 html읽기
defer속성 자바스크립트를 만나면 = 

defer 속성쓰면 html다 읽고 나서 실행


<script src="js/jquery-3.6.1.min.js" defer></script> 맨위에 

<script src="js/jquery-3.6.1.min.js"></script> 맨밑에

라이브러리 모듈 프레임워크는 동기적으로 먼저받는게 좋다


자바스크립트에서 html다읽고 실행하도록
document.addEventListener('DOMcontentLoaded', function(event){
    console.log(document.querySelectorAll('.field'));
}

=>

$(function(){

});
//-----

window.addEventListener('load', function(event){
    
}

=>

$(window).on('load', function(event){

});

$(window).load(function(event){

});


//------

**dom을 가지고 css주는 거하지말라


$ === jquery

load이벤트는 window에만 사용가능

async(비동기) = 


제이쿼리에서는 for in for of 두개를 .each로 합쳐서 사용가능


$.each(user, (i,value) => {
    console.log(i,value);
});

//배열돌리기(i = 인덱스)
$.each([1,2,3], (i,value) => {
    console.log(i,value);
});

//객체돌리기
$.each({a:1, b:2}, (key,value) => {
    console.log(key,value);
});

//--

셀렉트, 셀렉트all 대신
$('div') 무조건 여러개

객체인데 배열처럼 가져옴

{
    0 : 321213,
    1 : 32132312~~~~
}

그래서

$('div').each(function(index,element){
    console.log(index,element);
});


첫번째값만 가지고 오기
$('div').first()

셀렉터
$('div:first')

//메서드타입 프로퍼티...... 둘다 접근가능
$('div')[0];

$('div').get(0);

//셀렉터사용시 css셀렉터보다는 제이쿼리 셀렉터를사용하는게 좋다

www.w3schools.com/jquery/jquery_ref_selectors.asp //제이쿼리 셀렉터 


//for문 제이쿼리 each로 변환예제

for(let data of getUser()) {
    userIndex.push(data.index);
}

변환 =>

$.each(getUser(), (i,value) => {
    userIndex.push(value.index);
});
//---

function appendUser(data) {
    document.querySelector('#table tbody').appendChild(stringToHTML(replaceTemplate(document.getElementById('user_template').innerHTML, data)));
}

변환 = >

$(function(){
    function stringToHTML(value){
        const $table = $('<table>');

        $table.append(value);

        return $table.find('tr').get(0);
    }
})



//=-------------

**** addEventListener => on (jquery에서는 on)

//----

필터기능
//dom에서 check이벤트가 발생하면 함수로 떨궈주기(필터)
$(document).on('change','.check',function(event){

});

//this 키워드는 많이 사용하니 함수시작하면 this찍어보고 시작하는 습관이 좋다



submit이벤트는 true하면 넘어가고 return false주면 새로고침막을 수 있다 (실행 하고 안하고 return값으로 제어가능함)


// 제이쿼리는 문법에 getter setter가 있다

$('.check').prop('checked'); getter //checked에 대한 모든것을 찾아서 러ㅏㄴ ㅓ링누링ㄴ;ㅜㅎ니ㅏㅇㅎ,
$('.check').prop('checked', $(this).prop('.checked')); setter

이벤트타겟 보다는 $(this) 사용하는ㄱ ㅔ좋다 이유는 모름


//제이쿼리 구글검색해보고 그 문법을 교육사이트에 검증해보는 게 좋다
//교육사이트에서 하나하나 찾으면 너무 오래걸리기때문

중요한거
3가지
querySelector

traversing
 가장많이 쓰는 것 add 기존제이쿼리 객체에 추가
 .children([selector])
 //만약 교육사이트에 [ ]표시가 있다는 건 해당기능 사용시 생략해도 되는 부분임

 is/ last/ map (배열로 만들어줌)
 utilities
