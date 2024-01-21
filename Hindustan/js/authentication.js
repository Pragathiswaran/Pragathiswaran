const form = document.querySelector('#form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');

const formlog = document.querySelector('#formlog');
const usernamelog = document.querySelector('#usernamelog'); 
const passwordlog = document.querySelector('#passwordlog'); 
                 
if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (await validateinput()) {
            form.submit();
        }
    });
}

if (formlog) {
    formlog.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (await validateinputlog()) {
            formlog.submit();
        }
    });
}

function checkUser(username) {
    return new Promise((resolve, reject) => {
        var xmlhttp = new XMLHttpRequest();
        var formData = new FormData();
        formData.append("username", username);

        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    var response = JSON.parse(this.responseText);
                    resolve(response.user);
                } else {
                    reject(new Error("Error in AJAX request"));
                }
            }
        };

        xmlhttp.open("POST", "test.php", true);
        xmlhttp.send(formData);
    });
}

// function checkpass(password) {
//     return new Promise((resolve, reject) => {
//         var xmlhttp = new XMLHttpRequest();
//         var formData = new FormData();
//         formData.append("password", password);

//         xmlhttp.onreadystatechange = function () {
//             if (this.readyState == 4) {
//                 if (this.status == 200) {
//                     var response = JSON.parse(this.responseText);
//                     resolve(response.pass);
//                 } else {
//                     reject(new Error("Error in AJAX request"));
//                 }
//             }
//         };

//         xmlhttp.open("POST", "test.php", true);
//         xmlhttp.send(formData);
//     });
// }

async function validateinput() {
    let success = true;
    const usernameval = username.value.trim();
    const passwordval = password.value.trim();
    const emailval = email.value.trim();
    const phoneval = phone.value.trim();

    if (usernameval === "") {
        success = false;
        setError(username, "Name is Required");
    } else {
        const user_available = await checkUser(usernameval);
        if (user_available) {
            success = false;
            setError(username, "Username already exists");
        } else {
            setSuccess(username);
        }
    }

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

    return success;
}

async function validateinputlog() {
    let success = true;
    const _usernamelogval = usernamelog.value.trim();
    const _passwordlogval = passwordlog.value.trim();

    if (_usernamelogval === "") {
        success = false;
        setError(usernamelog, "Name is Required"); 
    } else {
        const user_available = await checkUser(_usernamelogval);
        if (user_available) {
            success = false;
            setError(usernamelog, "Invalid Username"); 
        } else {
            setSuccess(usernamelog);
        }
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
        // const pass_available = await checkpass(_passwordlogval);
        // if (!pass_available) {
        //     success = false;
        //     setError(passwordlog, "Invalid Password"); 
        // } else {
        //     setSuccess(passwordlog);
        // }
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

