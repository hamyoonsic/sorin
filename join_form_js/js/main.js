(function() {
    'use strict';
    

    /** Validation Check Start **/
    /* 이름 */
    document.getElementById('username').addEventListener('blur', function(event) {
        const value = this.value,
              elParent = this.parentElement,
              parentClassList = elParent.classList;

              console.log(value,elParent,parentClassList);

        if(value) {
            if(!/^[ㄱ-ㅎㅏ-ㅣ가-힣]+$/g.test(value)) {
                parentClassList.add('error');
                parentClassList.remove('success');
                console.log(parentClassList);
            }else{
                parentClassList.add('success');
                parentClassList.remove('error');
            }
        }else{
            parentClassList.remove('success', 'error');
        }
    });

    /* 이메일 */
    document.getElementById('email').addEventListener('blur', function(event) {

        const value = this.value,
              elParent = this.parentElement,
              parentClassList = elParent.classList;

        if(value) {
            if(!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g.test(value)) {
                parentClassList.add('error');
                parentClassList.remove('success');
            }else{
                parentClassList.add('success');
                parentClassList.remove('error');
            }
        }else{
            parentClassList.remove('success', 'error');
        }


        /*
            (실습문제 1) 이메일 유효성검사 작성
              - 이메일 유효성검사 정규식 : /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                * 다른 이메일 정규식을 검색해서 사용해도 됨
                * 다른 유효성검사 항목 참고하여 작성 (이름, 비밀번호 등)

        */
    });

    /* 비밀번호 */
    document.getElementById('pwd').addEventListener('blur', function(event) {
        const value = this.value,
              elParent = this.parentElement,
              parentClassList = elParent.classList;

        if(value) {
            if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g.test(value)) {
                parentClassList.add('error');
                parentClassList.remove('success');
            }else{
                parentClassList.add('success');
                parentClassList.remove('error');
            }
        }else{
            parentClassList.remove('success', 'error');
        }
    });

    /* 비밀번호확인 */
    document.getElementById('pwdConfirm').addEventListener('blur', function(event) {
        const value = this.value,
              pwdValue = document.getElementById('pwd').value,
              elParent = this.parentElement,
              parentClassList = elParent.classList;

        if(value) {
            if(value !== pwdValue) {
                parentClassList.add('error');
                parentClassList.remove('success');
            }else{
                parentClassList.add('success');
                parentClassList.remove('error');
            }
        }else{
            parentClassList.remove('success', 'error');
        }
    });
    
    /** Validation Check End **/

    
    // 최초접근시 회원데이터 불러오기
    window.onload = function(){
        
        
        let f_user_arr = JSON.parse(localStorage.getItem('user_arr'));
        
        //가입자 데이터 수만큼 템플릿 복사
        for(let i = 0; i<f_user_arr.length; i++){

            let count =0;

            let template = document.querySelector('#user_template');
            let newContent = document.importNode(template.content,true).firstElementChild;
            let tbody = document.querySelector('#target');
            newContent.querySelectorAll('td').forEach(function(element) {

                let value = '';
                
                
                if(count==0){

                    let x = document.createElement("input");

                    x.setAttribute("type", "checkbox");

                    x.setAttribute("id" , `user_${i}`)
                    
                    element.appendChild(x);
                    
                    count++
                
                }else{

                    for(let k in f_user_arr[i]) {
                    
                        if(element.innerText === `{${k}}`) {
                            let obj =f_user_arr[i];
                            value = obj[k];
                            
                        }
                    
                    }
    
                    element.innerText = value;
                }

            });
    
            
            tbody.appendChild(newContent);
        }
    }


    

    // 회원가입 submit
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let userData = Object.fromEntries(new FormData(this).entries());
        
        //회원가입 데이터 로컬스토리지에 저장
        let user_arr = [];//배열 초기화
        
        user_arr.push(userData);//배열에 가입데이터 저장

        let origin = JSON.parse(localStorage.getItem('user_arr')); //기존 로컬스토리지에 있는 회원정보 가져오기

        origin.push(user_arr[0]); //기존 데이터에 새로운 가입자데이터 추가

        let origin_str = JSON.stringify(origin);

        for(let i=0; i<origin_str.length; i++){
            localStorage.setItem('user_arr', origin_str);
        }

        
        
        //회원가입 데이터 template 치환

        let template = document.querySelector('#user_template');

        let newContent = document.importNode(template.content,true).firstElementChild;

        
        let tbody = document.querySelector('#target');

        newContent.querySelectorAll('td').forEach(function(element) {
            let value = '';

            for(let i in userData) {
                if(element.innerText === `{${i}}`) {
                    value = userData[i];
                }
            }

            element.innerText = value;
        });

        
        tbody.appendChild(newContent);
        



     });


    
    //전체선택 전체선택해체
    document.getElementById('check_all').addEventListener('click', function(event){

        let checkbox = document.querySelectorAll('input[type="checkbox"]');

        if(document.getElementById('check_all').checked==true){
            checkbox.forEach((element) => {
                element.checked=true;
            })
        }else if(document.getElementById('check_all').checked==false){

            checkbox.forEach((element) => {
                element.checked=false;
            })
        }
          
    });



    //하나만 체크해도 전체체크 풀리기
    while(true){
        let check_list = document.querySelectorAll('input')
        https://myhappyman.tistory.com/115
    }
 
})();




   
