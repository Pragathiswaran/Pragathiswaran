const form = document.querySelector('#form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
let success =true;

form.addEventListener('submit',(e)=>{
    
    if(!validateinput()){
        e.preventDefault();
    }
})

function validateinput(){
    const usernameval=username.value.trim();
    const passwordval = password.value.trim();

    if(usernameval === ''){
        success = false;
        seterror(username,"Username is Requried")
    }
    else {
        setsuccess(username)
    }

    if(passwordval === ''){
        success = false;
        seterror(password,"Password is Requried")
    } 
    else if(passwordval.length<8){
        success = false;
        seterror(password,"Password must be atleast 8 digits")
    }
    else {
        setsuccess(password)
    }

    return success;
}

function seterror(element,message){
    const inputgroup = element.parentElement;
    const errorElement = inputgroup.querySelector('.error');

    errorElement.innerText = message;
    inputgroup.classList.add('error');
    inputgroup.classList.remove('success');
}

function setsuccess(element){
    const inputgroup = element.parentElement;
    const errorelement = inputgroup.querySelector('.error');

    errorelement.innerText ="";
    inputgroup.classList.add('success');
    inputgroup.classList.remove('error');
}