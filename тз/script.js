var submitBtn = document.querySelector('[type=submit]');
var inputs = document.querySelectorAll('input:not([type=submit]):not([type=radio])');
var form = document.querySelector('form');

form.onsubmit = function () {

    return false;
}
submitBtn.onclick = function () {
    var isFormValid = false;
    for (var i = 0; i <= inputs.length - 1; i++) {
        isFormValid = checkValidity(inputs[i]);
        if(! isFormValid){
            break;
        }
    }
    if (isFormValid) {
        alert('Валидация пройдена!')
    }
}

function checkValidity(input) {
    var isFormValid = false;
    var errorCont = input.parentNode.querySelector('span');

    switch (input.dataset.validation) {
        case 'text':
            if (!input.value) {
                isFormValid = false;
                input.classList.add('invalid');
                errorCont.innerHTML = 'Поле должно быть заполнено';
            } else
                if (/['"]/g.test(input.value)) {
                    isFormValid = false;
                    input.classList.add('invalid');
                    errorCont.innerHTML = 'Кавычек не должно быть';
                } else {
                    isFormValid = true;
                    input.classList.remove('invalid');
                    errorCont.innerHTML = '';
                }
            break;
        case 'email':
            if (!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
                .test(input.value)) {
                isFormValid = false;
                input.classList.add('invalid');
                errorCont.innerHTML = 'Не правильный E-mail';
            } else {
                isFormValid = true;
                input.classList.remove('invalid');
                errorCont.innerHTML = '';
            }

            break;
        case 'address':
            if (input.value) {
                isFormValid = false;
                input.classList.add('invalid');
                errorCont.innerHTML = 'Поле должно быть заполнено';
            } else {
                isFormValid = true;
                input.classList.remove('invalid');
                errorCont.innerHTML = '';
            }
            break;
        case 'date':
            if (!input.value) {
                isFormValid = false;
                input.classList.add('invalid');
                errorCont.innerHTML = 'Выберите дату';
            } else {
                isFormValid = true;
                input.classList.remove('invalid');
                errorCont.innerHTML = '';
            }
            break;
        default:
       
            break;
    }
    return isFormValid;
}