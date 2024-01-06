<?php
$login = false;
$result = false;
if(isset($_POST['username']) && isset($_POST['password'])){
    $username = $_POST['username'];
    $password = $_POST['password'];
    $result = authentication($username,$password);
    $login = true;
} 

?>
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
            <input type="text" name="username" placeholder="Username..." id="usernamelog"><br>
            <input type="password" name="password" placeholder="Password..." id="passwordlog">
            <button type="submit" class="buttonsignin" >Sign in</button>
            <span class="login-link">Don't have any account <a href="signup.php">Sign up</a></span>
        </form>
    </div>
<script>
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('#formlog');
        const _username = document.querySelector('#usernamelog'); 
        const _password = document.querySelector('#passwordlog'); 
        const login = <?php echo json_encode($login); ?>;
        const result = <?php echo json_encode($result); ?>;

        form.addEventListener('submit', function (event) {
            if(login === true && result === true) {
                window.location.href = 'test.php';
            } else {
                if(!validateinputlog(_username,_password)){
                    event.preventDefault();
                }
                
                
            }
        });
    });
</script>
