/* DOM Attribute
 - Gọi đến attribute của 1 element có thể thêm
    tên thuộc tính của thẻ như id,class,title
 VD: <h1 class="text">xin chao</h1>
    class="text" => là Attribute của thẻ h1

*/
var headingAttribute = document.querySelector('h1');
 //gán trực tiếp cho biến headingAttribute có className là heading-text 
 //Attribute phải hợp lệ
    headingAttribute.className = 'heading-text';
    // console.log(headingAttribute);
    headingAttribute.title = "text-content"
    
//c2: sử dụng setAttribute để thêm thuộc tính thẻ không hợp lệ
    headingAttribute.setAttribute('hreff','demo');
// getAttribute('tên thuộc tính') : dùng để lấy value của thuộc tính
    console.log(headingAttribute.getAttribute('class'));
    console.log(headingAttribute.getAttribute('hreff'));
    alert(headingAttribute.className); //Lấy giá trị của attribute
