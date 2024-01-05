const form = document.querySelector('#form1');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');


form.addEventListener('submit',(e)=>{
    
    if(!validateinput()){
        e.preventDefault();
    }
})

function validateinput(){
    let success = true;
    const usernameval = username.value.trim();
    const passwordval = password.value.trim();
    const emailval = email.value.trim();
    const phoneval = phone.value.trim();

    if(usernameval === ""){
        success = false;
        setError(username,"Invalid username or password")
    }
    else{
        setSuccess(username)
    }

    if(passwordval === ""){
        success = false;
        setError(password,"Invalid username or password")
    }
    else if(passwordval.length<8){
        success = false;
        setError(password,"Invalid username or password")
    }
    else{
        setSuccess(password)
    }

    if(emailval === ""){
        success = false;
        setError(email,"Invalid username or password")
    }
    else{
        setSuccess(email)
    }

    if(phoneval === ""){
        success = false;
        setError(phone,"Invalid username or password")
    }
    else{
        setSuccess(phone)
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