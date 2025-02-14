<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="cadastrar_desafio.css">
</head>
<body>
    
    <div class="header">
        <img src="../../components/menu/imagens/logoAdmin.png" alt="LogoAdmin">
        <div class="botao">
            <button type="submit" class="cadastrarDesafio">Concluído</button>
            <img class="iconeX" src="../../components/menu/imagens/iconeX.png" alt="">
        </div>
    </div>

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
        
        <div class="dataDesafioDiv"> 

            <div class="dataDesafioInterno">
                <label class="dataDesafio" for="">Inicio</label>
                <input type="date" name="inicioDesafio" id="inicioDesafio">
            </div>
            <div class="dataDesafioInterno">
                <label class="dataDesafio"  for="">Fim</label>
                <input type="date" name="fimDesafio" id="fimDesafio">
            </div>
           
        </div> 
    </form>
    
   
</body>
</html>