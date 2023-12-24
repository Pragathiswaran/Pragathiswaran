const form = document.querySelector('#form1');
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

    if(usernameval === ""){
        success = false;
        seterror(username,"Invalid username or password");
    }

    return success;
}

function seterror(element,messsage){
    const inputgroup = element.parentElement;
    const errorelement = inputgroup.querySelector('.result');

    errorelement.innerText = messsage;
    inputgroup.classList.add('error');
}