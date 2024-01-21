<?php
include 'libs/load.php';

if(isset($_POST['username']) ) {
    $user = $_POST['username'];
    // $pass = $_POST['password'];
    // && isset($_POST['password'])
    $value = new validate();
    $result_user = $value->checkuser($user);
    // $result_pass = $value->checkpass($pass);

    if($result_user === false){
        $user = false;
    } else {
        $user = true;
    }

    // if($result_pass === false){
    //     $pass = false;
    // } else {
    //     $pass = true;
    // }
    // , 'password' => $pass
} 

header('Content-Type: application/json');
echo json_encode(array('user' => $user));
exit();
?>
