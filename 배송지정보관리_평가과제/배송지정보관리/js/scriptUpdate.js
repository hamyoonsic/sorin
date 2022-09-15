(function(){

    let index ;
    
    let toggle = false;
    //필수입력요소
    let formElements = [
        document.querySelector("#shipaddr"),    //배송지명
        document.querySelector("#username"),    //받으시는 분
        //document.querySelector("#uphonefirst"), //휴대폰번호
        //document.querySelector("#uphonemid"),   //휴대폰번호
        //document.querySelector("#uphonelast"),  //휴대폰번호
        document.querySelector("#postcode"),    //우편번호
        document.querySelector("#road"),        //주소
        document.querySelector("#detail"),      //상세정보
        ];
       

    //### 1,2 글자수 제한 = html코드에서 옵션
    
    window.addEventListener('load',function(){

        //파라메터로 받은 유저이름
        const url = new URL(location.href);
        const urlParams = url.searchParams;
        let username = (urlParams.get('username'));
        
        //유저이름에 맞는 데이터 인덱스값 구하기
        let dataArr = JSON.parse(localStorage.getItem('user')) ?? [];
        for(let i of dataArr){
            var result = Object.values(i)
            //console.log("result==="+result);
            //console.log("resultdasdsa==="+result[1]);
            if(JSON.stringify(result[1]) == username){

                for(let k in dataArr){
                    
                    if(dataArr[k].index==result[11]){
                        //console.log("이거?="+k);
                        //console.log("이거hgfh="+i);

                        
                        index = k;
                        
                    }
                }
                //index = Object.keys(result);
               // console.log(index);
            }
        } 

        updateData(index);
        if(toggle){
            document.querySelector("#uphonemid").disabled = true;
            document.querySelector("#uphonemid").value = "";
            document.querySelector("#uphonelast").disabled = true;
            document.querySelector("#uphonelast").value = "";
        }else if(!toggle){
            document.querySelector("#uphonemid").disabled = false;
            document.querySelector("#uphonelast").disabled = false;
        }


        

    })
    
    //### 3. 휴대폰 번호 "없음" 선택시 inputbox비활성화
    document.addEventListener('change', event => {
       
        toggle = false;
        document.querySelector("#uphonemid").disabled = false;
        document.querySelector("#uphonelast").disabled = false;

        if(event.target.classList.contains('uphonefirst')){
            if(document.querySelector("#uphonefirst").value == ""){
                document.querySelector("#uphonemid").disabled = true;
                document.querySelector("#uphonemid").value = "";
                document.querySelector("#uphonelast").disabled = true;
                document.querySelector("#uphonelast").value = "";
                toggle = true;
            }
        }
    })

    //### 필수입력요소 체크
    document.querySelector('#submit').addEventListener("click", function(event){
        for(let element of formElements) {
            if(!document.querySelector("#uphonefirst").value=="" && (!document.querySelector("#uphonemid").value || !document.querySelector("#uphonelast").value)){
                alert("휴대폰번호 뒷자리를 입력해주세요")
                event.preventDefault();
                break;
            }
            if(!element.value || (element.type === 'checkbox' && !element.checked)) {
                alert(`${document.querySelector(`label[for="${element.id}"]`).innerText} 필수입력 요소입니다.`);
                event.preventDefault();
                break;
            }

            
            
        }
        
    });

    //### 4. 주소
    document.querySelector('#btn_find').addEventListener('click', function(event){
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                if(data.userSelectedType === 'R'){
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if(extraAddr !== ''){
                        extraAddr = ' (' + extraAddr + ')';
                    }
                    // 조합된 참고항목을 해당 필드에 넣는다.
                    document.getElementById("road").value = extraAddr;
                
                } else {
                    document.getElementById("detail").value = '';
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('postcode').value = data.zonecode;
                document.getElementById("road").value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("detail").focus();
            }
        }).open();


    });

    //### 6. 모든 text inputbox "<" , ">" 입력금지
    document.querySelector('body').addEventListener('keyup', function(event){
        document.querySelectorAll('input').forEach(function(element){
            let regExp = /[<>]/gi;
            if(regExp.test(element.value)){
                alert("특수문자는 입력하실 수 없습니다");
                element.value="";
                element.focus();
                //element.value = element.value.substring(0,element.value.length -1);
            }
        });
    });
    

    
    //수정하기
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();

        
        if(confirm('수정하시겠습니까?')) {
            let updataData = JSON.parse(localStorage.getItem('user'));
            updataData[index].ship_addr = document.getElementById('shipaddr').value;
            updataData[index].user_name = document.getElementById('username').value;
            if(!updataData[index].user_phone_first==""){
                updataData[index].user_phone_first = document.getElementById('uphonefirst').value;
                updataData[index].user_phone_mid = document.getElementById('uphonemid').value;
                updataData[index].user_phone_last =document.getElementById('uphonelast').value;
            }   
            updataData[index].postcode = document.getElementById('postcode').value;
            updataData[index].road = document.getElementById('road').value;
            updataData[index].detail = document.getElementById('detail').value;
            updataData[index].extra = document.getElementById('extra').value;

            
            localStorage.removeItem('user'); //삭제
            localStorage.setItem('user', JSON.stringify(updataData)); //추가
            location.href="/배송지정보관리_평가과제/배송지정보관리/list.html";
        }

        
    });

    


    //수정하기전 원본 데이터 출력
    function updateData(index) {

        let updataData = JSON.parse(localStorage.getItem('user'));
        document.getElementById('shipaddr').value = updataData[index].ship_addr
        document.getElementById('username').value = updataData[index].user_name;
        if(!updataData[index].user_phone_first==""){

            document.getElementById('uphonefirst').value = updataData[index].user_phone_first;
            document.getElementById('uphonemid').value = updataData[index].user_phone_mid;
            document.getElementById('uphonelast').value = updataData[index].user_phone_last;
        }
        document.getElementById('postcode').value = updataData[index].postcode;
        document.getElementById('road').value = updataData[index].road;
        document.getElementById('detail').value = updataData[index].detail;
        document.getElementById('extra').value = updataData[index].extra;
   
    }
  
})();





