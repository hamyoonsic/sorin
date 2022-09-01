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

    
    // 회원가입 submit
    document.getElementById('form').addEventListener('submit', function(event) {
        
        const urlParams = new URL(location.href).searchParams;

        const   username    = urlParams.get('username'),
                email       = urlParams.get('email'),
                pwd         = urlParams.get('pwd'),
                pwdConfirm  = urlParams.get('pwdConfirm'),
                ser_addr    = urlParams.get('ser_addr'),
                gender      = urlParams.get('gender'),
                rm          = urlParams.get('rm'),
                privacy     = urlParams.get('privacy'),
                marketing   = urlParams.get('marketing');
    /*
       if(!username){
            
            alert('이름을 입력하세요');
            document.getElementById('username').focus();
            return;
       }

       if(!email){
            
            alert('이메일를 입력하세요');
            document.getElementById('email').focus();
            return;
       }
       

       if(!pwd){
            
            alert('비밀번호를 입력하세요');
            document.getElementById('pwd').focus();
            return;
       }
       

       if(!privacy){
            
            alert('개인정보수집동의 하세요');
            document.getElementById('privacy').focus();
            return;
       }
       */
    
       console.log('이름='+username);
       console.log('이메일='+email);
       console.log('비밀번호='+pwd);
       console.log('비밀번호확인='+pwdConfirm);
       console.log('지역='+ser_addr);
       console.log('성별='+gender);
       console.log('자기소개='+rm);
       console.log('개인정보동의='+privacy);
       console.log('마케팅동의='+marketing); 
    
    /*

            (실습문제 2) form 전송 시 각 항목 입력값 확인
              # 이름, 이메일, 비밀번호, 개인정보수집동의 필수 입력 값

        const   username    = document.getElementById('username').value,
                email       = document.getElementById('email').value, 
                pwd         = document.getElementById('pwd').value, 
                pwdConfirm  = document.getElementById('pwdConfirm').value, 
                ser_addr    = document.getElementById('user_addr').value, 
                gender      = document.getElementById('gender').value, 
                rm          = document.getElementById('rm').value,
                privacy     = document.getElementById('privacy').value, 
                marketing   = document.getElementById('marketing').value; 
                 
           
        */
    /*          
        const table = document.getElementById('table');

        const newRow = table.insertRow(table.rows.length);
        const newCell1 = newRow.insertCell(0);
        const newCell2 = newRow.insertCell(1);
        const newCell3 = newRow.insertCell(2);
        const newCell4 = newRow.insertCell(3);
        const newCell5 = newRow.insertCell(4);
        const newCell6 = newRow.insertCell(5);
        const newCell7 = newRow.insertCell(6);
        const newCell8 = newRow.insertCell(7);
    
        ;

        newCell1.innerText = "";
        newCell2.innerText = username;
        newCell3.innerText = email;
        newCell4.innerText = pwd;
        newCell5.innerText = ser_addr;
        newCell6.innerText = gender;
        newCell7.innerText = privacy;
        newCell8.innerText = marketing;
    */   
 
 
     });
    
})();



/* 
자바스크립트 버튼클릭시 추가되는 테이블 행/ 새로고침하면 사라지는 이유
*/
   
