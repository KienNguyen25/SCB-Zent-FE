var username = document.getElementById('#username');
var email = document.getElementById('#email');
var password = document.getElementById('#password');
var confirmPassword = document.getElementById('#confirm-password');

//trim(): Xóa bỏ dấu cách 2 lề
// function showError(input) {
//     let parent = input.parentElement;
//     let small = parent.querySelector('small')
//     parent.classList.add('error');
//     small.innerText = 'loi'
// }
function showError(input){
   console.log(input.parentElement);
}
showError(username);