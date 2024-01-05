<?php

function load_template($name){
    
    include $_SERVER['DOCUMENT_ROOT']."/timeline/Hindustan/_template/$name.php";
}

function authentication($username,$password){
    if($username == "pragathis" && $password =="praga@0009"){
        return true;
    }
    else{
        return false;
    }
}
?>