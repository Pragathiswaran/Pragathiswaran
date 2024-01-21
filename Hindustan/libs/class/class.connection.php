<?php

class connection {
    private $conn = null;

    public function connect() {
        if ($this->conn == null) {
            $servername = "172.31.96.1";
            $username = "praga";
            $password = "password";
            $dbname = "timeline";

            $connection = new mysqli($servername, $username, $password, $dbname);

            if ($connection->connect_error) {
                die("Connection failed: " . $connection->connect_error);
            } else {
                // echo "success";
                $this->conn = $connection;
            }
        }
            return $this->conn;
    }
}
?>