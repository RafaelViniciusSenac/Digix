<?php
function ProdutosDigix()
{
    $produtos = [
        'copo.png',
        'caderno 2.png',
        'iphone.png'

    ];

    foreach ($produtos as $produto) {
        echo "<div class='imgD'>
        <button id='imgbotao' onclick='openModal(\"$produto\")'>
            <img class='imagensP' src='./img/$produto' alt='IMG'>
        </button>
      </div>";
    }
}
function imagensCampanha()
{
    $produtos = [
        'copo.png',
        'caderno5.png',
        'caderno 2.png',
        'caderno 3.png',
        'image 5.png',
        'iphone.png'
    ];
    foreach ($produtos as $produto) {
        echo "<div class='imgD'>
                <button id='imgbotao'><img class='imagensP' src='./img/$produto' alt='IMG'></button>
              </div>";
    }
}
?>
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
        rel="stylesheet">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=search" />
    <link rel="stylesheet" href="lista_produtos.css">
    <link rel="stylesheet" href="../../components/menu/menu_colaborador/menu_colaborador.css">
    <title>Produtos</title>
</head>

<body>
    <div id="menuColaborador"></div>

    <div class="produtos">
        <div class="produtosDigix">
            <div class="ProdBarra">
                <h1>Produtos Digix</h1>
                <div class="barra"></div>
            </div>
            <div class="search">
                <i id="lupa" class="fa fa-search" aria-hidden="true"></i>
                <input class="searchBar" type="search">
            </div>
        </div>

        <div class="imagensDigix">
            <?php ProdutosDigix() ?>
        </div>

        <!-- <div class="ProdBarra">
            <h1>Produtos Campanha</h1>
            <div class="barra"></div>
        </div>

        <div class="imagensCampanha">
            <?php imagensCampanha() ?>
        </div> -->
    </div>

    <dialog  id="modal">
        <div class="container">
            <div class="flip">
                <div class="frente">
                    <header>
                        <div>Copo Stanley</div>
                        <button>X</button>
                    </header>
                    <div>
                        <img class="aaa" src="./img/copo.png" alt="copo">
                        <div>
                            <p>DG$</p>
                            <span>9999</span>
                        </div>
                        <button>adquirir</button>
                    </div>
                </div>

                <div class="tras">
                    <div>
                        <div>Copo Stanley</div>
                        <button>X</button>
                    </div>
                    <div>
                        <p>Quantidade: </p>
                        <span>999</span>
                    </div>
                    <div>
                        <p>Sobre: </p>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, dolorem.</span>
                    </div>
                    <i id="refresh" class="fa fa-refresh" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    </dialog>


    <script src="../../components/menu/menu_colaborador/menu_colaborador.js"></script>
    <!-- <script src="./lista_produtos.js"></script> -->

    <script>
     const updateButton = document.getElementById("imgbotao");
const confirmButton = document.getElementById("submit");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("modal");
const selectElement = document.getElementById("favAnimal");

// Update button opens a modal dialog
updateButton.addEventListener("click", () => {
  dialog.showModal();
});


    </script>

</body>

</html>