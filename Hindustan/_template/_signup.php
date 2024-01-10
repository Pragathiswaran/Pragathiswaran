<?php
$signup = false;
if(isset($_POST['username']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['password']) && !empty($_POST['password'])){
    $username = $_POST['username'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = $_POST['password'];
    // $signup = true;
    $result = new validate();
    // $check = $result->checkuser($username);
    // if($check){
        $res_result = $result->Signup($username,$email,$phone,$password);
        $signup = true;
    // }
} 

if($signup){
    if($res_result){
        header('Location:login.php');
        exit();
    }
} else {
?>
<div>
    <button class="button">Enrollment to Program</button>
    <button class="button">Library WebOPAC</button>
</div>
<form action="" method="post" class="formwrapper" id="form">
    <h2>Sign Up to our student portal</h2>
    <div class="inputgroup">
        <input type="text" name="username" id="username" placeholder="Username">
        <div class="result"></div>
    </div>
    <div class="inputgroup">
        <input type="email" name="email" id="email" placeholder="Email">
        <div class="result"></div>
    </div>
    <div class="inputgroup">
        <input type="text" name="phone" id="phone" placeholder="Phone">
        <div class="result"></div> 
    </div>
    <div class="inputgroup">
        <input type="password" name="password" id="password" placeholder="Password">
        <div class="result"></div>
    </div>
    <button type="submit" class="btn-signup" >Sign in</button>
    <div>
        <span class="span">Aleady have account <a href="login.php">Login</a></span>
    </div>
</form>
<?php } ?>
