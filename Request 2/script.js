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
//xác thực địa chỉ người dùng
/* function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}
 */
//xác thực quốc gia
/* function countryselect(ucountry)
{
if(ucountry.value == "Default")
{
alert('Select your country from the list');
ucountry.focus();
return false;
}
else
{
return true;
}
} */
//xác thực mã ZIP
/* function allnumeric(uzip)
{ 
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
return true;
}
else
{
alert('ZIP code must have numeric characters only');
uzip.focus();
return false;
}
} */
//xác thực định dạng email
/* function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
} */
//xác định giới tính
/* function validsex(umsex,ufsex)
{
x=0;

if(umsex.checked) 
{
x++;
} if(ufsex.checked)
{
x++; 
}
if(x==0)
{
alert('Select Male/Female');
umsex.focus();
return false;
}
else
{
alert('Form Successfully Submitted');
window.location.reload()
return true;}
}
 */

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
$(document).ready(function(){
    $("#btnSubmit").click(function(){
        var Country = $("#selectCountry :selected");
        if(Country.val() === "")
        {
            document.getElementById("statusOfCountry").innerHTML="Vui lòng chọn quốc gia";
            document.getElementById("statusOfCountry").style.color="red";
        }
        else{
            document.getElementById("statusOfCountry").innerHTML="Quốc gia: "+Country.val()+"";
            document.getElementById("statusOfCountry").style.color="Blue";
        }
})
})
    $(document).ready(function(){
        $("#btnSubmit").click(function(){
        if($.isNumeric( $('#txtZip').val()))
         {
        $('#statusOfZip').html('Value is Numeric');
        $('#statusOfZip').css('color','blue');

         }
        else
         {
        $('#statusOfZip').html('Value is not Numeric');
        $('#statusOfZip').css('color','red');
         }
        });
        });
        $(document).ready(function(){
            function checkEmail(){
                let email = $('#txtEmail').val();
                let emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if(emailRegex.test(email)){
                    return true
                }
                return false
            }
            $("#btnSubmit").click(function(e){
                e.preventDefault();
                if(checkEmail()){
                    $("#statusOfEmail").text('Email hợp lệ')
                    $("#statusOfEmail").css('color','blue')
                }else{
                    $("#statusOfEmail").text('Email không hợp lệ')
                    $("#statusOfEmail").css('color','red')
                }
            })
        })
        $(document).ready(function(){
            $("input[type='submit']").click(function(){
                var radioValue = $("input[name='gender']:checked").val();
                if(radioValue){
                    $('#statusOfSex').html('Giới tính:'+ radioValue);
                    $('#statusOfSex').css('color','blue');
                    $('#statusOfSex').css('margin-left','50px');
                }
                else{
                    $('#statusOfSex').html("Vui lòng chọn giới tính");
                    $('#statusOfSex').css('color','red');
                    $('#statusOfSex').css('margin-left','50px');
                    
                }
            });
        });
function newFunction() {
    xác; thực; địa
}

