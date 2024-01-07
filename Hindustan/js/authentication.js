const form = document.querySelector('#form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');

if(form){
    form.addEventListener('submit',(e)=>{
    
        if(!validateinput()){
            e.preventDefault();
        }
    })
}

// if(formlog){
//     formlog.addEventListener('submit',(r)=>{
    
//         if(!validateinputlog()){
//             r.preventDefault();
//         }
//     })
// }


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

function validateinputlog(usernamelogval, passwordlogval) {
    let success = true;
    const _usernamelog = usernamelogval.value.trim();
    const _passwordlog = passwordlogval.value.trim();

    if (_usernamelog === "") {
        success = false;
        setError(usernamelogval, "Username cannot be empty");
    } else {
        setSuccess(usernamelogval);
    }

    if (_passwordlog === "") {
        success = false;
        setError(passwordlogval, "Password cannot be empty");
    } else if (_passwordlog.length < 8) {
        success = false;
        setError(passwordlogval, "Password must be at least 8 characters long");
    } else {
        setSuccess(passwordlogval);
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
