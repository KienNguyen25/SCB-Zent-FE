//ClassList property

// add => thêm class vào element
// contains => kiểm tra 1 class có nằm trong element hay ko
// remove => xóa bỏ 1 class khỏi element
// toggle => nếu có 1 class ở trong element thì 
// toggle sẽ xóa bỏ class đó, nếu không có class thì toggle sẽ thêm vào

var boxElement = document.querySelector('.box');

// console.log(boxElement.classList[0]); //trả về value class
// console.log(boxElement.classList.length); //trả về độ dài của class
// console.log(boxElement.classList.value); //trả giá trị phần tử của class
boxElement.classList.add('red', 'blue');

console.log(boxElement.classList.contains('red')); 
//kiểm tra class red có tồn tại hay không

boxElement.classList.remove('blue');
//xóa class blue khỏi element
setTimeout(() => {
    boxElement.classList.remove('red');
    //xóa class red sau 3s
}, 3000);

setInterval(() => {
    boxElement.classList.toggle('red');
}, 1000);