const form = document.querySelector('#form1');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
let success = true;

form.addEventListener('submit',(e)=>{
    
    if(!validateinput()){
        e.preventDefault();
    }
})

function validateinput(){
    const usernameval = username.value.trim();
    const passwordval = password.value.trim();

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