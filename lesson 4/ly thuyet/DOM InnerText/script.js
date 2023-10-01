/*
DOM InnerText, textContent
innerText => Lấy văn bản bên trong của một phần tử
textContent => Lấy văn bản bên trong của một phần tử, 
//              trả về nội dung thật của nó

*/

var headingElement = document.querySelector('.heading');
//Lấy ra giá trị gọi là getter
console.log(headingElement.innerText);
console.log(headingElement.textContent);

//Sửa đổi nội dung mới gọi là setter
headingElement.innerText = "Heading text new"
headingElement.textContent = "Heading text new 1"
