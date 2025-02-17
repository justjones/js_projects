const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form__control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//success message
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form__control success';    
}

//check if email is valid format
function checkEmail(input){
    const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   if (re.test(input.value.trim())) {
    showSuccess();
   }else {
    showError(input, 'Email is not valid');
   }
}

//check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
       if (input.value.trim() === '') {
        showError(input, `${getFieldName(input)} is required`);
       }else {
        showSuccess(input);
       }
    });
}

//check input length
function checkLength(input, min, max){
    if (input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }else {
        showSuccess(input);
    }
}

//confirm password
function checkPaaswordsMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Passwords do not match');
    }
}

//get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPaaswordsMatch(password, password2);
});

