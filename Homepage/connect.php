<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $feedback = $_POST['feedback'];


    //database connection

    $conn = new mysqli('localhost','root','test');
    if($conn->connect_error){
        die(''. $conn->connect_error);
    }
    else{
        $stmt= $conn->prepare("insert into userfeedback(name,email,feedback) values (?, ?, ?)");
        $stmt->bind_param("sss", $name, $email,$feedback);
        $stmt->execute();
        echo"registration successfully...";
        $stmt->close();
        $conn->close();
    }

?>