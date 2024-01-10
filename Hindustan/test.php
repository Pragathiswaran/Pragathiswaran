<?php
include 'libs/load.php';
// $conn = new validate();
// $result = $conn->Signup("pragathis","email@email.com","1234567890","password");

// // $conn = new connection();
// // $result = $conn->connect();

// if($result){
//     echo "success";
// } else {
//     echo "failed";
// }

$user = $_POST['username'];
$value = new validate();
$result = $value->checkuser($user);

if($result === false){
    $phpValue = true;
    header('Content-Type: application/json');
    echo json_encode(array('phpValue' => $phpValue));
    exit();
} else {
    $phpValue = false;
    header('Content-Type: application/json');
    echo json_encode(array('phpValue' => $phpValue));
    exit();
}

// echo $user;

// Assuming you have a variable $phpValue that you want to send to JavaScript


// Set the content type to JSON
header('Content-Type: application/json');

// Output the value as JSON

?>


<script>
    var user = '<?php echo $user ?>';
</script>
<script src="js/authentication.js"></script>


