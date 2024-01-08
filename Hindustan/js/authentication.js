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

    // if(user === '1'){
    //     success = false;
    //     setError(username,"Username is already used")
    // }else{
    //     setSuccess(username)
    // }

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
    // else if(_usernamelogval !== "pragathis"){
    //     setError(usernamelog, "Invalid Username");
    // }
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
    // else if(_passwordlogval !== "praga@0009"){
    //     setError(passwordlog, "Invalid password");
    // }
      else {
        setSuccess(passwordlog);
    }

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

