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
    else if(passwordval.length<8){
        success = false;
        setError(password,"Password atleast in 8 characters")
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

function validateinputlog(){
    success = true;
    const usernamelogval = usernamelog.value.trim();
    const passwordlogval = passwordlog.value.trim();
    if(usernamelogval === ""){
        success = false;
        setError(usernamelog,"Invalid username or password")
    }
    else{
        setSuccess(usernamelog)
    }
    if(passwordlogval === ""){
        success = false;
        setError(passwordlog,"Invalid username or password")
    }
    else if(passwordlogval.length<8){
        success = false;
        setError(passwordlog,"Invalid username or password")
    }
    else{
        setSuccess(passwordlog)
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
