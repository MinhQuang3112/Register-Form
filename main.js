var userName=document.querySelector('#username')
var email=document.querySelector('#email')
var password=document.querySelector('#password')
var password2=document.querySelector('#password2')
var btnLogin=document.querySelector('.btn-login')
var form=document.querySelector('form')
console.log(form)
function showError(input,message) {
    let parent=input.parentElement
    let small=parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}
function showSuccess(input) {
    let parent=input.parentElement
    let small=parent.querySelector('small')
    parent.classList.remove('error')
    parent.classList.add('success')
    small.innerText =''
}
function checkEmptyError(listInput){
    let ischeckEmptyError=false
    listInput.forEach(input=>{
        input.value=input.value.trim()
         if(!input.value){
             showError(input,`${getFieldname(input)} is required`)
             ischeckEmptyError=true
         }
         else{
             showSuccess(input)
            }
    })
    return ischeckEmptyError

}

function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,`${getFieldname(input)} must be at least${min} characters`)
    }
    else if(input.value.length > max){
        showError(input,`${getFieldname(input)} must be less than ${max} characters`)
    }
    else{
        showSuccess(input)
    }
}
function checkEmail(input){
    const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(regexEmail.test(input.value.trim())){
        showSuccess(input)
    }
    else{
        showError(input,'Email is not valid')
    }
    let a= input.value.trim().match(regexEmail)
    console.log(a[0])
}

function checkPasswordMatch(input1,input2){ 
    if(input1.value!==input2.value){
        showError(input2,'Passwords do not match')
    }   
}   

function getFieldname(input){
    // viết hoa chữ cái đầu
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

form.addEventListener('submit',function(e){
    e.preventDefault()
    let arrInput=[userName,email,password,password2]
    if(!checkEmptyError(arrInput)){
        let checkSucceed=document.querySelectorAll('.success')
        checkLength(userName,3,12)
        checkLength(password,6,15)
        checkEmail(email)
        checkPasswordMatch(password,password2)
        console.log(checkSucceed)
        if(checkSucceed.length===4){
            alert('Submit Successfully')
            arrInput.forEach(input=>{
                input.value=''
                input.parentElement.classList.remove('success')
            })
        }
    }
})
