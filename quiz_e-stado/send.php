<?php
    $email = 'lead-me2017@yandex.ru';

    $from = "https://e-stado.com";

    $countCow = $_POST['countCow'];
    $countMilk = $_POST['countMilk'];
    $position = $_POST['position'];
    $contact = $_POST['contact'];
    $contactValue = $_POST['contactValue'];

    $subject = "=?utf-8?B?".base64_encode("Сообщение с сайта")."?=";

    $message =
        "Сообщение с сайта $from!
        $contact клиента: $contactValue.
        Количество дойных коров: $countCow.
        Клиент доит $countMilk л молока в сутки.
        Клиент – $position.";

    $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

    $success = mail($email, $subject, $message, $headers);

//    echo $success;

    echo "Данные приняты. Спасибо Вам, мы скоро свяжемся с Вами.";

?>
