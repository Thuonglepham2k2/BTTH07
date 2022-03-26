//check userID 
function checkUserId() {
    let userID = document.getElementById('txtUserID');
    let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
    if (userIDRegex.test(userID.value)) {
        return true
    }
    return false
}
// check password

function checkPassword() {
    let password = document.getElementById('txtPassword');
    let passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
    if (passwordRegex.test(password.value)) {
        return true
    }
    return false
}
//check name
function checkName() {
    let name = document.getElementById('txtName');
    let nameRegex = /^[A-Za-z]+$/;
    if (nameRegex.test(name.value)) {
        return true
    }
    return false
}
// check address
function checkAddress() {
    let address = document.getElementById('txtAddress');
    let addressRegex = /^[0-9a-zA-Z]+$/;
    if (addressRegex.test(address.value)) {
        return true
    }
    return false
}
//check country

let country = document.getElementById('selectCountry')
let statusOfCountry = document.getElementById('statusOfCountry')
country.addEventListener('forcus',function(){
    this.style.border = '1px solid'

})
country.addEventListener('focusout',removeCountry)

function removeCountry(){
    if(country.value ==''){
        statusOfCountry.textContent='must selec a country'
        statusOfCountry.style.color='red'
        statusOfCountry.style.fontSize='15px'
    }
    else{
        statusOfCountry.textContent='Invalid'
        statusOfCountry.style.color='blue'
        statusOfCountry.style.fontSize='15'
    }
}
//check Sex

let = document.getElementById('selectOfSex')
let statusOfSex = document.getElementById('statusOfSex').addEventListener('forcus',function(){
    this.style.border = '1px solid'

})
Sex.addEventListener('focusout',removeSex)

function removeSex(){
    if(Sex.value ==''){
        statusOfSex.textContent='must selec a Sex'
        statusOfSex.style.color='red'
        statusOfSex.style.fontSize='15px'
    }
    else(Sex.value='Male'||Sex.value='Female'){
        statusOfSex.textContent='Invalid'
        statusOfSex.style.color='blue'
        statusOfSex.style.fontSize='15'
    }
}
//check Language

let = document.getElementById('selectOfLanguage')
let statusOfLanguage = document.getElementById('statusOfLanguage').addEventListener('forcus',function(){
    this.style.border = '1px solid'

})
Sex.addEventListener('focusout',removeLanguage)

function removeLanguage(){
    if(Language.value ==''){
        statusOfLanguage.textContent='must selec a Language'
        statusOfLanguage.style.color='red'
        statusOfLanguage.style.fontSize='15px'
    }
    else(Language.value='English'||Language.value='Non English'){
        statusOfLanguage.textContent='Invalid'
        statusOfLanguage.style.color='blue'
        statusOfLanguage.style.fontSize='15'
    }
}
//Check About

//check Zipcode
function checkZip() {
    let zip = document.getElementById('txtZip');
    let zipRegex = /^[0-9]+$/;
    if (zipRegex.test(zip.value)) {
        return true
    }
    return false
}
// check Email
function checkEMail() {
    let email = document.getElementById('txtEmail');
    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(email.value)) {
        return true
    }
    return false
}
let submit = document.getElementById('btnSubmit')

submit.addEventListener('click', function (e) {
    e.preventDefault()
    let statusOfUserID = document.getElementById('statusOfUserID')
    let statusOfPassword = document.getElementById('statusOfPassword')
    if (checkUserId() == true) {
        statusOfUserID.textContent = 'Valid UserID'
        statusOfUserID.style.color = 'blue'
    } else {
        statusOfUserID.textContent = 'Invalid UserID.Length from 5 - 12'
        statusOfUserID.style.color = 'red'
    }

    if (checkPassword() == true) {
        statusOfPassword.textContent = 'Valid password'
        statusOfPassword.style.color = 'blue'
    } else {
        statusOfPassword.textContent = 'Invalid password.Length from 7 - 12'
        statusOfPassword.style.color = 'red'
    }
    if (checkName() == true) {
        statusOfName.textContent = 'Valid name'
        statusOfName.style.color = 'blue'
    } else {
        statusOfName.textContent = 'Invalid name'
        statusOfName.style.color = 'red'
    }
    if (checkAddress() == true) {
        statusOfAddress.textContent = 'Valid'
        statusOfAddress.style.color = 'blue'
    } else {
        statusOfAddress.textContent = 'Invalid'
        statusOfAddress.style.color = 'red'
    }
    if (checkZip() == true) {
        statusOfZip.textContent = 'Invalid'
        statusOfZip.style.color = 'blue'
    } else {
        statusOfZip.textContent = 'Must be numeric only'
        statusOfZip.style.color = 'red'
    }
    if (checkEMail() == true) {
        statusOfEmail.textContent = 'Valid email'
        statusOfEmail.style.color = 'blue'
    } else {
        statusOfEmail.textContent = 'Invalid email'
        statusOfEmail.style.color = 'red'
    }
})





