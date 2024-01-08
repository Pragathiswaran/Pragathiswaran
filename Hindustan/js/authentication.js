const form = document.querySelector('#form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const formlog = document.querySelector('#formlog');
const usernamelog = document.querySelector('#usernamelog'); 
const passwordlog = document.querySelector('#passwordlog'); 
                 
if(form){
    form.addEventListener('submit',(e)=>{
    
        if(!validateinput()){
            e.preventDefault();
        }
    })
}

if(formlog){
    formlog.addEventListener('submit',(r)=>{
    
        if(!validateinputlog()){
            r.preventDefault();
        }
    })
}


function validateinput(){
    let success = true;
    const usernameval = username.value.trim();
    const passwordval = password.value.trim();
    const emailval = email.value.trim();
    const phoneval = phone.value.trim();


    if(usernameval === ""){
        success = false;
        setError(username,"Username is Requried")
    }
    else{
        setSuccess(username)
    }

    if(passwordval === ""){
        success = false;
        setError(password,"Password is Requied")
    }
    else if (passwordlog.length < 8) {
        success = false;
        setError(passwordlog, "Password must be at least 8 characters long");
    }
    else{
        setSuccess(password)
    }

    if(emailval === ""){
        success = false;
        setError(email,"Email is Requried")
    }
    else{
        setSuccess(email)
    }

    if(phoneval === ""){
        success = false;
        setError(phone,"Phone number is Requried")
    }
    else{
        setSuccess(phone)
    }

    return success;
}

function validateinputlog() {
    let success = true;
    const _usernamelogval = usernamelog.value.trim();
    const _passwordlogval = passwordlog.value.trim();

    if (_usernamelogval === "") {
        success = false;
        setError(usernamelog, "Username cannot be empty");
    }
    else if(_usernamelogval !== "pragathis"){
        setError(usernamelog, "Invalid Username");
    }
     else {
        setSuccess(usernamelog);
    }

    if (_passwordlogval === "") {
        success = false;
        setError(passwordlog, "Password cannot be empty");
    }
    else if (_passwordlogval.length < 8) {
        success = false;
        setError(passwordlog, "Password must be at least 8 characters long");
    }
    else if(_passwordlogval !== "praga@0009"){
        setError(passwordlog, "Invalid password");
    }
      else {
        setSuccess(passwordlog);
    }

    // if((user && pass) === false){
    //     success = false;
    //     setError(passwordlog,"Invalid username");
    // } else {
    //     setSuccess(password)
    // }

    return success;
}

function setError(element,messsage){
    const inputgroup = element.parentElement;
    const errorelement = inputgroup.querySelector('.result');

    errorelement.innerText = messsage;
    inputgroup.classList.add('error');
}

function setSuccess(element){
    const inputgroup = element.parentElement;
    const errorelement = inputgroup.querySelector('.result');

    errorelement.innerText = '';
    inputgroup.classList.remove('error');
}

// var name = '<?php echo $name ?>'
//     if(name === '1'){
//         alert("success");
//     } else {
//         alert("failed");
// Use an AJAX request to fetch the PHP value asynchronously
// 

// function validate(){
//     fetch("test.php")
//     .then(res => res.json())
//     .then(data => {
//        alert(data);
//     });
// }

// var xhr = new XMLHttpRequest();


// xhr.open('GET', 'test.php', true);

// xhr.onload = function () {
//   if (xhr.status >= 200 && xhr.status < 300) {
   
//     var data = JSON.parse(xhr.responseText);

   
//     var name = data.name;
//     var age = data.age;
//     var city = data.city;

//     alert(name + ', ' + age + ', ' + city);
//   } else {

//     console.error('Request failed with status:', xhr.status);
//   }
// };

// xhr.onerror = function () {
//   console.error('Network error occurred');
// };

// xhr.send();
