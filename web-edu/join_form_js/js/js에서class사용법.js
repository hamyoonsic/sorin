구현방법두가지

class 브라우저의 호환성이 높아야한다.

사실은 프로토타입임 (자바의 클래스랑 다름) 자바는 프로토타입이 XMLDocument
(function(){



    class user {

        static {
            console.log(1); //코드 초기화 끝나자마자 실행되도록 
        }

        #name;
        id = 1;
        static #name; (인스턴스 생성하기 전에 미리 이 변수에 접근해서 사용가능)

        constructor(){ //컨스트럭터 함수 ***((한개의 class에서는 하나의 생성자만 사용가능))

        }
        
        a() {
            this.constructor.name
        } //static 변수 꺼내쓰는 방법

        #a(){  // #붙이면 private 메서드로 바뀜
             
        }
    }

})();

class user {

    constructor(a,b,c){ //이경우 a만 값이 들어옴 b /c 는 undefined뜸 / null아님 /  js에서는 내가 특정값을 줘야만 null반환

        console.log(a);
    }
}

var user1 = new user('가나다'); 


class Member {

    constructor(){
        console.log('member');
    }

    a() {

    }
}
//상속가능 / getter setter처럼 사용가능
class user extends Member{
    a ;

    constructor(){
        super(); //상위클래스 생성자 호출

        get a(){

        }

        set a(){

        }

        a(){
            //오버라이딩 
        }
    }
}





이렇게 써도 프로토타입에 의존한다

하나만 선언해야하고 두개선언하면 에러남

클래스이름은 항상 대문자 (java에서는 항상 대문자)

엄격하다

