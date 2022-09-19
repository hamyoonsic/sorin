(function() {
    'use strict';
    
    function replaceTemplate(value, data) {
        let result = '';

        if(typeof value === 'string') {
            result = value;
            
            for(let i in data) {
                result = result.replace(new RegExp(`{${i}}`, 'g'), data[i]);
            }

            result = result.replace(/{([^}]*)}/g, '');
        }
        
        return result;
    }
            
    function isArrayLike(value) {
        let result = false;

        try {
            const length = value.length;

            result = typeof length === 'number' && length > -1;
        }

        catch {

        }

        return result;
    }

    function toArray(value) {
        return (value === null || value === undefined) ? [] : (isArrayLike(value) ? Array.prototype.slice.call(value) : [value]);
    }

    function loopArrayLike(value, callback) {
        if(typeof callback === 'function') {
           const array = toArray(value);

           for(let i = array.length; i--;) {
                if(callback.call(array, array[i], i, array) === false) {
                    break;
                }
           }
        }
    }

    const user = {
        _key : 'user',

        get data() {
            return JSON.parse(localStorage.getItem(this._key)) ?? [];
        },

        set data(value) {
            localStorage.setItem(this._key, JSON.stringify(value));
        },

        validate(data, callback) {
            let result = true;

            if(typeof callback === 'function') {
                loopArrayLike(data, info => {
                    for(let i in info) {
                        if(i !== 'index' && callback.call(info, info[i], i, info) === false) {
                            result = false;

                            return result;
                        }
                    }
                });
            }
        },

        getMaxIndex() {
            const indexList = this.sel().map(info => info.index);

            indexList.push(-1);

            return Math.max(...indexList);
        },

        sel(indexList) {
            const result = this.data;

            indexList = toArray(indexList);
            
            if(indexList.length) {
                loopArrayLike(result, (info, index) => {
                    if(indexList.indexOf(info.index) === -1) {
                        result.splice(index, 1);
                    }
                });
            }

            return result;
        },

        ins(data, callback) {
            const list = this.sel(),
                  result = [];
            
            loopArrayLike(data, info => {
                info = Object.assign({}, info);

                const isValid = this.validate(info, callback);

                if(isValid === true || isValid === undefined) {
                    info.index = this.getMaxIndex() + 1;

                    list.push(info);

                    result.push(info.index);
                }
            });

            this.data = list;

            return result;
        },

        del(indexList) {
            const data = this.sel(),
                  result = [];
            
            indexList = toArray(indexList).map(index => parseInt(index, 10));

            loopArrayLike(data, (info, index) => {
                let delIndex = info.index;

                if(indexList.indexOf(delIndex) > -1) {
                    result.push(delIndex);
                    
                    data.splice(index, 1);
                }
            });

            this.data = data;

            return result;
        },

        append(element, template, indexList) {
            if(element instanceof Element && template instanceof HTMLTemplateElement) {
                loopArrayLike(this.sel(indexList), info => {
                    const elTr = document.importNode(template.content, true).firstElementChild;

                    elTr.dataset[`${this._key}Index`] = info.index;
                    
                    element.innerHTML += replaceTemplate(elTr.outerHTML, info);
                });
            }
        },

        remove(indexList) {
            indexList = toArray(indexList);

            loopArrayLike(document.querySelectorAll(`[data-${this._key}-index]`), element => {
                if(indexList.indexOf(parseInt(element.dataset[`${this._key}Index`], 10)) > -1) {
                    element.parentElement.removeChild(element);
                }
            });
        }
    };

    const elTbody = document.querySelector('#table tbody'),
          elTemplate = document.getElementById('user_template');

    user.append(elTbody, elTemplate);

    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();

        const indexList = user.ins(Object.fromEntries(new FormData(this).entries()), (value, key, data) => {
        });

        if(indexList.length) {
            user.append(elTbody, elTemplate, indexList);
        }
    });

    document.getElementById('delete').addEventListener('click', event => {
        const elChecked = toArray(document.querySelectorAll('.check:checked'));

        if(elChecked.length) {
            if(confirm('삭제하시겠습니까?')) {
                user.remove(user.del(elChecked.map(element => element.value)));
            }
        }else{
            alert('선택된 사용자가 없습니다.');
        }
    });

    document.getElementById('check_all').addEventListener('change', function(event) {
        const isChecked = this.checked;

        document.querySelectorAll('.check').forEach(element => {
            element.checked = isChecked;
        });
    });

    document.addEventListener('change', event => {
        if(event.target.classList.contains('check')) {
            document.getElementById('check_all').checked = document.querySelectorAll('.check:checked').length === document.querySelectorAll('.check').length;
        }
    });
})();