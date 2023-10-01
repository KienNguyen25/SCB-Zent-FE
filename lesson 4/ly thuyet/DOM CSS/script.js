var boxElement = document.querySelector('.box');
// console.log(boxElement.style);
boxElement.style.width = "200px";
boxElement.style.height = "200px";
boxElement.style.backgroundColor = "red";

var boxElementSecond = document.querySelector('.box-2');
Object.assign(boxElementSecond.style, {
    width: '200px',
    height: '200px' ,
    backgroundColor: 'green'
});
//get giá trị thuộc tính css background
console.log(boxElementSecond.style.backgroundColor);