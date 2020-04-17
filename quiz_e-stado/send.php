<?php

    $email = $_POST['email'];

    $from = "https://leadme.agency";

    $countCow = $_POST['countCow'];
    $countMilk = $_POST['countMilk'];
    $position = $_POST['position'];

    $subject = "=?utf-8?B?".base64_encode("Сообщение с сайта")."?=";
    $message =
        "Было отправлено сообщение с сайта $from!
        Ваш E-mail: $email.
        Количество дойных коров: $countCow.
        Вы доите $countMilk л молока в сутки.
        Вы – $position.";
    $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

    $success = mail($email, $subject, $message, $headers);

//    echo $success;

    echo "Сообщение отправлено. Спасибо Вам , мы скоро свяжемся с Вами.";

?>