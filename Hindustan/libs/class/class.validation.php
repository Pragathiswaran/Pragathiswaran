<?php

class validate{
    
    private $conn = null;
        
    public function __construct(){
        $db = new connection();
        $this->conn = $db->connect();
    }

    public function checkuser($username){
        $query = "SELECT * FROM `validation` WHERE username = '$username'";
        $result = $this->conn->query($query);
        if ($result->num_rows > 0) {
            return false;
        } else {
            return true;
        }
    }

    // public function checkpass($password){
    //     $query = "SELECT * FROM `validation` WHERE password = '$password'";
    //     $result = $this->conn->query($query);
    //     if ($result->num_rows > 0) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }

    public function Signup($name,$email,$phone,$pass){
       $option= [
            'cost'=> 9,
        ];
        $password=password_hash($pass,PASSWORD_BCRYPT,$option);
        $sql = "INSERT INTO `validation` (`Username`, `Phone`, `Email`, `Password`)
        VALUES ('$name','$email','$phone', '$password');";
        if ($this->conn->query($sql) === TRUE) {
            return true;
        } else {
            return false;
        }
    }

    function login($name,$pass){
        $sql = "SELECT * FROM `validation` WHERE `username`= '$name' ";
        $result= $this->conn->query($sql);
        if($result->num_rows == 1){
            $row = $result->fetch_assoc();
            if(password_verify($pass,$row['password'])){
                return true;
            } else {
                return false;
            } 
        }
        else{
            return false;
        }
    }
}
?>