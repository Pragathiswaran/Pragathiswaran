<?php
$login = false;
$result = false;
if(isset($_POST['username']) && isset($_POST['password'])){
    $username = $_POST['username'];
    $password = $_POST['password'];
    if(($result = authentication($username,$password)) === true){
        $login = true;
    }
} 

if($login === true){
    if($result === true){
        header('Location:test.html');
        exit();
    }else{ ?>
        <script>
            document.addEventListener('DOMContentLoaded', function () {
                const form = document.querySelector('#formlog');
                const _username = document.querySelector('#usernamelog'); 
                const _password = document.querySelector('#passwordlog'); 

                form.addEventListener('submit', function (event) {
                    if(!validateinputlog(_username,_password)){
                        event.preventDefault();
                    }
                });
            });
        </script> 
        <?php
    }
} else { ?>
    <script>
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('#formlog');
        const _username = document.querySelector('#usernamelog'); 
        const _password = document.querySelector('#passwordlog'); 

        form.addEventListener('submit', function (event) {
             if(!validateinputlog(_username,_password)){
                event.preventDefault();
             }

        });
    });
        
</script>
<?php } ?>

<div class="back">
    <button class="button">Enrollment to Program</button>
    <button class="button">Library WebOPAC</button>
    <div class="div">
        <h3>Login to our student <br> parent portal</h3>
        <p>Enter your username and <br>
                password to log on:</p>
        <img src="image/lock.png" class="lock">
    </div>
    <form class="form" method="post" action="login.php" id="formlog">
        <div class="result"></div>
        <div>
            <input type="text" name="username" placeholder="Username..." id="usernamelog">
        </div>
        <div>
            <input type="password" name="password" placeholder="Password..." id="passwordlog">
        </div>
        <button type="submit" class="buttonsignin" >Sign in</button>
        <span class="login-link">Don't have any account <a href="signup.php">Sign up</a></span>
    </form>
</div>
