$(document).ready(function(){
    // // $('.accordion-item.active .accordion-body').slideDown();
    // $('.accordion-header').click(function(){
    //     $(this).parent().toggleClass('active');
    //     $(this).parent().children('.accordion-body').slideToggle();
    // });
    $('.accordion-body').hide(); // Hide all answers by default

    $('.accordion-header').click(function(){
        $(this).parent().toggleClass('active');
        $(this).parent().children('.accordion-body').slideToggle();
        $(this).find('.fa-minus, .fa-plus').toggleClass('minus plus');
    });
    $('button').click(function() {
        checkEmail(); // Gọi hàm kiểm tra email khi nút "Submit" được nhấn
    });

    function checkEmail() {
        var emailInput = $("#email");
        var emailMsg = $("#emailMsg");
        var emailValue = emailInput.val().trim(); // Lấy giá trị email và loại bỏ khoảng trắng

        if (emailValue === "") {
            emailInput.css("border", "2px solid red");
            emailMsg.html("<p class='text-danger'>Email không được để trống</p>");
        } else if (validate_email(emailValue)) {
            emailInput.css("border", "2px solid green");
            emailMsg.html("<p class='text-success'>Email Ok</p>");
        } else {
            emailInput.css("border", "2px solid red");
            emailMsg.html("<p class='text-danger'>Email chưa đúng định dạng</p>");
        }
    }
    function validate_email(){
        var email = $("#email").val();
        var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(pattern.test(email)){
            return true;
        }else{
            return false;
        }
    }
});