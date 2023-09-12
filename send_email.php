<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    
    $to = "startcodedigital@gmail.com"; 
    $headers = "From: $email\r\n";
    
    mail($to, $subject, $message, $headers);
    
    echo "Email sent successfully!";
} 
?>