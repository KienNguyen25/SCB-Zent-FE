/* 
    DOM InnerHTML
//innerHTML() => thêm bên trong 1 element,attribute,text node 
                vào 1 element khác
//outerHTML() => thêm bên ngoài 1 element,attribute,text node 

*/

var boxElement = document.querySelector('.box');
// console.log(boxElement);
boxElement.innerHTML = '<h1 title="heading">heading box</h1>';
console.log(document.querySelector('h1').innerText); //setter
console.log(boxElement.innerHTML); //getter