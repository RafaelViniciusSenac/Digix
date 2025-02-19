<?php 


$errorMensage = '';
if(isset($_GET['erro'])){
    if($_GET['erro'] == true){
        $errorMensage = 'Email ou senha incorretos!';
    }

}

$router = "login";

?>


<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="index.css">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
        rel="stylesheet">
</head>

<body>
    <div class="telaBranca">
        <div class="parteinferior">
        <div class="logoDigix">
            <img class="logo" src="./App/login/logo 1.png" alt="">
        </div>
            <form action="./backend/router/loginRouter.php?action=<?php echo $router ?>" method="POST">
                <div class="inputs">
                    <h3 class="textoTelaBranca">Email</h3>
                    <input name="email" class="inputTelaBranca" type="email">
    
                    <h3 class="textoTelaBranca">Senha</h3>
                    <input name="senha" class="inputTelaBranca" type="password">
    
                </div>
            </form>
            <button class="botaoTelaBranca">ENTRAR</button>

            <div class="linhaInferior">
                <a class="linkInferior1" href="#1"> Primeiro Acesso</a>
                <a class="linkInferior2" href="#2"> Esqueci Minha Senha</a>
            </div>
        </div>
    </div>

</body>

</html>
