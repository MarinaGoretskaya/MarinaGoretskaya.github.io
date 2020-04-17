<?php

if(isset($_POST['submit'])){
    $email = $_POST['email'];
    $resultData = $_POST['resultData'];

    $to = $email;
    //    $from = "https://leadme.agency";
    if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
    {
        show_error("<br /> Е-mail адрес не существует");
    }

    $mail_to_myemail = "Здравствуйте! 
Было отправлено сообщение с сайта $from!
Ваш E-mail: $email.
resultData.";

    $headers = "From: $from \r\n";

    /* Отправка сообщения, с помощью функции mail() */
    mail($to, $mail_to_myemail, $headers . 'Content-type: text/plain; charset=utf-8');
    echo "Сообщение отправлено. Спасибо Вам , мы скоро свяжемся с Вами.";
    echo "<br /><br /><a href='https://epicblog.net'>Вернуться на сайт.</a>";
}
?>
<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">
	function changeurl(){eval(self.location="https://leadme.agency");}
	window.setTimeout("changeurl();",3000);
</script>