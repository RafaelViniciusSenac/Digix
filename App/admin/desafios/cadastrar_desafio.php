<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="cadastrar_desafio.css">
</head>
<body>
    <div class="logo">
        <img src="../../components/menu/imagens/logoAdmin.png" alt="LogoAdmin">
        <img class="iconeX" src="../../components/menu/imagens/iconeX.png" alt="">
    </div>
    <button type="submit" class="cadastrarDesafio">Cadastrar Desafio</button>

    <form method="POST" action="">

        <div class="nomeDesafioDiv">
            <label for="">Nome do desafio</label>
            <input type="text" name="nomeDesafio" id="nomeDesafio" class="nomeDesafio" placeholder="nome do desafio">
        </div>

        <div class="nomeDesafioDiv">          
            <label for="">Valor do desafio</label>
            <input type="text" name="valorDesafio" id="valorDesafio" class="valorDesafio" placeholder="valor do desafio">
        </div>

        <div class="statusDesafioDiv">
            <input class="statusDesafio" name="statusDesafio" type="checkbox">
            <span>Campanha</span>
        </div>
        
        <div>
            <label for="">Inicio</label>
            <input type="date" name="inicioDesafio" id="inicioDesafio">
    
            <label for="">Fim</label>
            <input type="date" name="fimDesafio" id="fimDesafio">
        </div>
    </form>


</body>
</html>