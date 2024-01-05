<?php
$login = false;
if(isset($_POST['username']) && isset($_POST['password'])){
    $username = $_POST['username'];
    $password = $_POST['password'];
    $result = authentication($username,$password);
    $login = true;
} 

if (!$result) {
    $error_message = 'Invalid username or password from database';
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
            <span class="login-link">Don't have any account<a href="">Sign up</a></span>
        </form>
    </div>
<?php
    if($login == true){
        if($result){
            header('Location:test.php');
            exit();
        } else { ?>
            <script>
            document.addEventListener('DOMContentLoaded', function () {
                const form = document.querySelector('#formlog');
                const _username = document.querySelector('#usernamelog');

                form.addEventListener('submit', function (event) {
                    event.preventDefault();
                    setError(_username, 'Invalid username or password from database');
                });
            });
        </script>
        <?php  }
    } 