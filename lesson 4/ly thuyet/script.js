var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirm-password');
var form = document.querySelector('form');

//trim(): Xóa bỏ dấu cách 2 lề
// function showError(input) {
//     let parent = input.parentElement;
//     let small = parent.querySelector('small')
//     parent.classList.add('error');
//     small.innerText = 'loi'
// }

//parentElement: phan tu cha
function showError(input, message){
   // input.value = input.value.trim();
  let parent = input.parentElement;
  let small = parent.querySelector('small');
  parent.classList.add('error');
  small.innerText = message;
}

function showSuccess(input){
  let parent = input.parentElement;
  let small = parent.querySelector('small');
  parent.classList.remove('error');
  small.innerText = '';
}
// showError(username, 'loi');
//check tat ca INPUT ko dc de trong
function checkEmptyError(listInput){
   listInput.forEach(input => {
      input.value = input.value.trim();

      if(!input.value){
         showError(input, 'Khong duoc de trong');
      } else if (input === username && input.value.length < 8) {
         isEmptyError = true;
         showError(input, 'Username phải có ít nhất 8 ký tự');
       }else{
         showSuccess(input);
      }
   });
}

function checkEmailError(input){
   const regexEmail =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   input.value = input.value.trim();

   let isEmailError = !regexEmail.test(input.value);
   if (input.value === '') {
      showError(input, 'Email không được để trống');
    } else if (isEmailError) {
      showError(input, 'Email không hợp lệ');
    } else {
      showSuccess(input);
    }
   return isEmailError
}


form.addEventListener('submit', function(e){
   e.preventDefault();
   checkEmptyError([username, email, password, confirmPassword]);
   checkEmailError(email);
});
