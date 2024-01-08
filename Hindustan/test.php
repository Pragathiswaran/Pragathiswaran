<?php

// ob_start(); // Start output buffering
// if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
//     // This is an AJAX request, output JSON data
//     $data = array(
//         'name' => 'John',
//         'age' => 30,
//         'city' => 'New York'
//     );

//     // Set the Content-Type header to indicate JSON response
//     header('Content-Type: application/json');

//     // Output JSON data
//     echo json_encode($data);
//     exit();
// }

// ob_end_clean();
include 'libs/load.php';
$conn = new validate();
$result = $conn->Signup("pragathis","email@email.com","1234567890","password");

// $conn = new connection();
// $result = $conn->connect();

if($result){
    echo "success";
} else {
    echo "failed";
}
?>



