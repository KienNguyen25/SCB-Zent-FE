// HTML DOM có 3 thành phần:
/* 
 1.Element  
 2.Atribute
 3.TEXT
*/
// console.log(document);
// document.write('helo');
// -----------------------------------------------

//Element : id, tag, class, CSS selector, HTML collection
//getElementById() : trả về 1 phan tu trực tiếp
//getElementsByClassName() : muốn truy cập vào từng element phải
//                          sử dụng vòng lặp để lấy qua các ptu
//getElementsByTagName()
//querySelector() : lấy theo tên phần tử đặt theo html 
//                  VD: doccument.querySelector('.heading .box);
//querySelectorAll();
var ById = document.getElementById('heading');
var ByClassName = document.getElementsByClassName('heading-text');
var ByTagName = document.getElementsByTagName('p');
var Selector = document.querySelector('.box .heading-2');
var SelectorAll = document.querySelectorAll('.heading-2');
for(i=0; i < SelectorAll.length;i++){
    console.log(SelectorAll[i]);
}
console.log(SelectorAll[2]);
console.log(document.forms['form-2']);