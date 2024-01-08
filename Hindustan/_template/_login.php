<?php
$login = false;
if(isset($_POST['username']) && isset($_POST['password'])){
    $username = $_POST['username'];
    $password = $_POST['password'];
    $result = new validate();
    $login_value = $result->login($username,$password);
    $login = true;
} 

if($login === true){
    if($login_value === true){
        header('Location:test.html');
        exit();
    }else{ 
        ?>
        <h1 style="margin-bottom: -120px;">Login failed</h1>
        <?php
    }
} else {
    ?>

<div class="back">
    <button class="button">Enrollment to Program</button>
    <button class="button">Library WebOPAC</button>
    <div class="upper-form">
        <h3>Login to our student <br> parent portal</h3>
        <p>Enter your username and <br>
                password to log on:</p>
        <img src="image/lock.png" class="lock">
    </div>
    <form class="form-wrapper" method="post" action="login.php" id="formlog">
        <div class="inputgroup">
            <input type="text" name="username" placeholder="Username..." id="usernamelog">
            <div class="result"></div>
        </div>
        <div class="inputgroup">
            <input type="password" name="password" placeholder="Password..." id="passwordlog">
            <div class="result"></div>
        </div>
        <button type="submit" class="btn-login" >Sign in</button>
        <span class="login-link">Don't have any account <a href="signup.php">Sign up</a></span>
    </form>
</div>
<?php } ?>