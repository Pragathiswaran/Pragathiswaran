const form = document.querySelector('#form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const formlog = document.querySelector('#formlog');
const usernamelog = document.querySelector('#usernamelog'); 
const passwordlog = document.querySelector('#passwordlog'); 
                 
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        validateinput()
            .then((isValid) => {
                if (isValid) {
                    form.submit();
                }
            })
            .catch((error) => {
                console.error(error);
            });
    });
}

if (formlog) {
    formlog.addEventListener('submit', (e) => {
        e.preventDefault();

        validateinputlog()
            .then((isValid) => {
                if (isValid) {
                    formlog.submit();
                }
            })
            .catch((error) => {
                console.error(error);
            });
    });
}


function validateinput(){
    const passwordval = password.value.trim();
    const emailval = email.value.trim();
    const phoneval = phone.value.trim();
   
    usernamecheck()

    if(passwordval === ""){
        success = false;
        setError(password,"Password is Requied")
    }
    else if (passwordval.length < 8) {
        success = false;
        setError(password, "Password must be at least 8 characters long");
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

}

function validateinputlog() {
    let success = true;
    const _usernamelogval = usernamelog.value.trim();
    const _passwordlogval = passwordlog.value.trim();

    if (_usernamelogval === "") {
        success = false;
        setError(usernamelog, "Username cannot be empty");
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

function makeRequest(url) {
    return new Promise(function (resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject("HTTP error: " + this.status);
                }
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    });
}

function usernamecheck(){
    return new Promise((resolve, reject) => {
        const usernameval = username.value.trim();
        

        if (usernameval === "") {
            setError(username, "Username is Required");
            resolve(false);
        } else {
            makeRequest('test.php')
                .then((response) => {
                    const phpValue = response.phpValue;
                    console.log(phpValue);

                    if (phpValue === true) {
                        setError(username, "Username already exsit");
                        resolve(false);
                    } else {
                        setSuccess(username);
                        resolve(true);
                    }
                })
                .catch((error) => {
                    console.error(error);
                    reject(error);
                });
        }
    });

}