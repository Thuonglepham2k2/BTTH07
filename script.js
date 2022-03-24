// // Câu 01: Đăng kí User ID > 
// // Yêu cầu 01: Required
// // Yêu cầu 02: Độ dài thuộc [5, 12] 
//     // Cách 01: Ko dùng biểu thức chính qui
//     // Cách 02: Có dùng biểu thức chính qui

// // Lưu ý: Kiểu phần tử Submit có hành động mặc định gửi dữ liệu đi

// let userID = document.getElementById('txtUserID');
// let statusOfUserID = document.getElementById('statusOfUserID')
// // let userID = document.querySelector('#txtUserID')

// userID.addEventListener('focus',function(){
//     // userID.style.backgroundColor = 'yellow'
//     this.style.border = '1px solid red'
// })

// userID.addEventListener('focusout', leaveUserId)

// function leaveUserId(){
//     // Cách 01: Ko dùng gì BTCQ
//     // if(userID.value.length >=5 && userID.value.length <=12){
//     //     statusOfUserID.textContent = 'UserID hợp lệ'
//     //     statusOfUserID.style.color = 'blue'
//     // }else{
//     //     statusOfUserID.textContent = 'UserID không hợp lệ. Độ dài từ 5 - 12'
//     //     statusOfUserID.style.color = 'red'
//     // }

//     // Cách 02: dùng BTCQ: [1, +duongvocung]
//     var userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
//     if(userIDRegex.test(userID.value)){
//         statusOfUserID.textContent = 'UserID hợp lệ'
//         statusOfUserID.style.color = 'blue'
//     }else{
//         statusOfUserID.textContent = 'UserID không hợp lệ. Độ dài từ 5 - 12'
//         statusOfUserID.style.color = 'red'
//     }
// }

// // userID.onchange = function(){
// //     alert('Bạn vừa thay đổi UserID và thoát khỏi UserID')
// // }

// Cách làm 02: Chỉ xử lý khi nhấp Submit

// function checkUserId(){
//         // Cách 02: dùng BTCQ: [1, +duongvocung]
//     let userID = document.getElementById('txtUserID');
//     let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
//     if(userIDRegex.test(userID.value)){
//         return true
//     }
//     return false
// }

// function checkPassword(){
//     let password = document.getElementById('txtPassword');
//     let passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
//     if(passwordRegex.test(password.value)){
//         return true
//     }
//     return false
// }
// // Tương tự sẽ có 9 hàm check khác

// let register = document.getElementById('btnRegister')

// register.addEventListener('click', function(e){
//     e.preventDefault()
//     let statusOfUserID = document.getElementById('statusOfUserID')
//     let statusOfPassword = document.getElementById('statusOfPassword')
//     if(checkUserId() == true){
//         statusOfUserID.textContent = 'UserID hợp lệ'
//         statusOfUserID.style.color = 'blue'
//     }else{
//         statusOfUserID.textContent = 'UserID không hợp lệ. Độ dài từ 5 - 12'
//         statusOfUserID.style.color = 'red'
//     }

//     if(checkPassword() == true){
//         statusOfPassword.textContent = 'Password hợp lệ'
//         statusOfPassword.style.color = 'blue'
//     }else{
//         statusOfPassword.textContent = 'Password không hợp lệ. Độ dài từ 7 - 12'
//         statusOfPassword.style.color = 'red'
//     }
// })

// Cách 03: Sử dụng thư viện jQuery
// Cú pháp jQuery: $(SELECTOR).ACTION()
$(document).ready(function(){

    function checkUserId(){
        // Cách 02: dùng BTCQ: [1, +duongvocung]
        let userID = $('#txtUserID').val();
        let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
        if(userIDRegex.test(userID)){
            return true
        }
        return false
    }

    $("#btnSubmit").click(function(e){
        e.preventDefault();
        if(checkUserId()){
            $("#statusOfUserID").text('UserID hợp lệ')
            $("#statusOfUserID").css('color','blue')
        }else{
            $("#statusOfUserID").text('UserID không hợp lệ')
            $("#statusOfUserID").css('color','red')
        }
    })
})
$(document).ready(function(){

    function checkPassword(){
        // Cách 02: dùng BTCQ: [1, +duongvocung]
        let password = $('#txtPassword').val();
        let passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
        if(passwordRegex.test(password)){
            return true
        }
        return false
    }

    $("#btnSubmit").click(function(e){
        e.preventDefault();
        if(checkPassword()){
            $("#statusOfPassword").text('Password hợp lệ')
            $("#statusOfPassword").css('color','blue')
        }else{
            $("#statusOfPassword").text('Password không hợp lệ')
            $("#statusOfPassword").css('color','red')
        }
    })
})
$(document).ready(function(){
    function checkName(){
        let name = $('#txtName').val();
        let nameRegex = /^[a-zA-Z\s]+$/;
        if(nameRegex.test(name)){
            return true
        }
        return false
    }
    $("#btnSubmit").click(function(e){
        e.preventDefault();
        if(checkName()){
            $("#statusOfName").text('Tên hợp lệ')
            $("#statusOfName").css('color','blue')
        }else{
            $("#statusOfName").text('Tên không hợp lệ')
            $("#statusOfName").css('color','red')
        }
    })
})
