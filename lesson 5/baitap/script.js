// Lấy các phần tử DOM từ biểu mẫu
var username = document.getElementById('username');
var email = document.getElementById('email');
var weblink = document.getElementById('weblink');
var textms = document.getElementById('textms');
var form = document.querySelector('form');

// Hàm hiển thị lỗi
function showError(input, message) {
  var small = input.nextElementSibling; // Lấy phần tử "small" kế tiếp input
  input.classList.add('error');
  small.innerText = message;
}

// Hàm hiển thị thành công
function showSuccess(input) {
  var small = input.nextElementSibling; // Lấy phần tử "small" kế tiếp input
  input.classList.remove('error');
  small.innerText = '';
}
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
    checkEmptyError([username, email, weblink, textms]);
    checkEmailError(email);
 });
 


// ---------------------------------
// // Hàm kiểm tra email hợp lệ
// function isValidEmail(input) {
//   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//   return emailRegex.test(input.value);
// }

// // Hàm kiểm tra xem một trường input có rỗng hay không
// function isEmpty(input) {
//   return input.value.trim() === '';
// }

// // Sự kiện gửi form
// form.addEventListener('submit', function(e) {
//   e.preventDefault();

//   // Kiểm tra và hiển thị lỗi cho mỗi trường input
//   if (isEmpty(username)) {
//     showError(username, 'Name không được để trống');
//   } else {
//     showSuccess(username);
//   }

//   if (isEmpty(email)) {
//     showError(email, 'Email không được để trống');
//   } else if (!isValidEmail(email)) {
//     showError(email, 'Email không hợp lệ');
//   } else {
//     showSuccess(email);
//   }

//   // Kiểm tra và hiển thị lỗi cho các trường input khác (weblink, textms) tương tự

//   // Nếu không có lỗi, bạn có thể gửi biểu mẫu điều này
//   // Nếu có lỗi, bạn có thể hiển thị thông báo hoặc xử lý khác tùy theo yêu cầu của bạn
// });
