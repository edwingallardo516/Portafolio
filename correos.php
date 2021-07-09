<?php
$email = $_POST["mail"];
$name = $_POST["nombre"];
$message = $_POST["mensaje"];

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/PHPMailer/src/Exception.php';
require 'phpmailer/PHPMailer/src/PHPMailer.php';
require 'phpmailer/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);


//Server settings
$mail->SMTPDebug = 0;                      //Enable verbose debug output
$mail->isSMTP();                                            //Send using SMTP
$mail->Host       = 'smtp.office365.com';                     //Set the SMTP server to send through
$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
$mail->Username   = 'edwingallardo5162@outlook.com';                     //SMTP username
$mail->Password   = '2ce2870cb';                               //SMTP password
$mail->SMTPSecure = 'tls';            //Enable implicit TLS encryption
$mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

//Recipients
$mail->setFrom('edwingallardo5162@outlook.com', 'Mailer');
$mail->addAddress('edwinpga@unicauca.edu.co', 'Mailer');     //Add a recipient

//Formar mensaje
$mensaje = 'Nombre: ' . strval($name) . '<br />' . 'Correo: ' . strval($email) . '<br />' . 'Mensaje: ' . '<br />' . $message;

//Content
$mail->isHTML(true);                                  //Set email format to HTML
$mail->Subject = 'De Portafolio';
$mail->Body    = $mensaje;
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

$mail->send();

echo "<script> alert('Mensaje enviado') </script>";
echo "<script> setTimeout(\"location.href='index.php'\",10) </script>";
