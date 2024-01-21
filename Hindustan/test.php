<?php
include 'libs/load.php';

if(isset($_POST['username'])) {
    $user = $_POST['username'];
    $value = new validate();
    $result = $value->checkuser($user);

    if($result === false){
        $phpValue = false;
    } else {
        $phpValue = true;
    }
} 

header('Content-Type: application/json');
echo json_encode(array('phpValue' => $phpValue));
exit();
?>
