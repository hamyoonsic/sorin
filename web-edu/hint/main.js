(function() {
    'use strict';

    function replaceTemplate(value, data) {
        for(let key in data) {
            value = value.replace(`{${key}}`, data[key]);
        }
        
        value = value.replace(/{([^}]*)}/g, '');

        return value;
    }

    function stringToHTML(value) {
        const table = document.createElement('table');

        table.innerHTML = value;

        return table.querySelector('tr');
    }

    function addUser(data) {
        if(data) {
            const user = getUser();

            data.index = getMaxUserIndex() + 1;
            
            user.push(data);

            localStorage.setItem('user', JSON.stringify(user));
        }
    }

    function removeUser(index) {
        let removeIndex = -1;

        const user = getUser(),
              userLength = user.length;

        for(let i = 0; i < userLength; i++) {
            if(user[i].index == index) {
                removeIndex = i;

                break;
            }
        }

        if(~removeIndex) {
            user.splice(removeIndex, 1);

            localStorage.setItem('user', JSON.stringify(user));
        }
    }

    function getMaxUserIndex() {
        const userIndex = [-1];

        for(let data of getUser()) {
            userIndex.push(data.index);
        }

        return Math.max(...userIndex);
    }

    function getUser() {
        return JSON.parse(localStorage.getItem('user')) ?? [];
    }
    
    function appendUser(data) {
        document.querySelector('#table tbody').appendChild(stringToHTML(replaceTemplate(document.getElementById('user_template').innerHTML, data)));
    }

    function drawUser() {
        for(let value of getUser()) {
            appendUser(value);
        }
    }

    drawUser();

    document.getElementById('check_all').addEventListener('change', function(evnet) {
        const isChecked = this.checked;

        document.querySelectorAll('.check').forEach(function(element, index, array) {
            element.checked = isChecked;
        });
    });

    document.addEventListener('change', function(event) {
        if(event.target.classList.contains('check')) {
            document.getElementById('check_all').checked = document.querySelectorAll('.check:checked').length === document.querySelectorAll('.check').length;
        }
    });

    document.getElementById('delete').addEventListener('click', function(event) {
        if(confirm('삭제하시겠습니까?')) {
            document.querySelectorAll('.check:checked').forEach(function(element, index, array) {
                removeUser(element.value);
                alert(element.value);
            });

            location.reload();
        }
    });

    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();

        addUser(Object.fromEntries(new FormData(this).entries()));

        location.reload();

        /* 09-01 교육내용
        const formElements = [document.getElementById('username'), document.getElementById('email'), document.getElementById('pwd'), document.getElementById('pwdConfirm'), document.getElementById('privacy')];

        for(let element of formElements) {
            if(!element.value || (element.type === 'checkbox' && !element.checked)) {
                alert(`${document.querySelector(`label[for="${element.id}"]`).innerText}가(이) 입력되지 않았습니다.`);

                event.preventDefault();

                break;
            }
        }
        */
    });

    /** Validation Check Start **/
    /* 이름 */
    document.getElementById('username').addEventListener('blur', function(event) {
        const value = this.value,
              elParent = this.parentElement,
              parentClassList = elParent.classList;

        if(value) {
            if(!/^[ㄱ-ㅎㅏ-ㅣ가-힣]+$/g.test(value)) {
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
    
})();
