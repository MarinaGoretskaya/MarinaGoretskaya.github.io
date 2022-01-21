<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language');
    $mail->IsHTML(true);

    $mail->setFrom('marina.goretskaya.2307@gmail.com', 'html-верстальщик');
    $mail->addAddress('marina.goretskaya.2307@gmail.com');
    $mail->Subject = 'Привет! Спасибо за корректное заполнение формы на сайте';

    $body = '<h1>Письмо отправлено с сайта Свободные кухни</h1>';

    if(trim(!empty($_POST['name']))) {
        $body .= '<p><strong>Имя:</strong> ' . $_POST['name'] . '</p>';
    };
    if(trim(!empty($_POST['tel']))) {
        $body.='<p><strong>Телефон:</strong> '.$_POST['tel'].'</p>';
    };

    $mail->Body = $body;

    if (!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>