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
        <button id='imgbotao'>
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
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="lista_produtos.css">
</head>

<body>

    <div class="imagensDigix">
        <?php ProdutosDigix() ?>
    </div>
    <!-- pop-up dialog box, containing a form -->
    <dialog id="favDialog">
        <div class="container">
            <div class="">
                <div class="modalHeader">
                    Copo Stanley
                    <button>X</button>
                </div>
            </div>
            <div class="modalContent">
                <img class="aaa" src="./img/copo.png" alt="copo">
                <div class="modalPrice">
                    <p>DG$</p>
                    <p>9999</p>
                </div>
                <button>adquirir</button>
            </div>

            <!-- <div class="">
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
                    <i id="" class="fa fa-refresh" aria-hidden="true"></i>
                </div> -->
        </div>
        </div>
    </dialog>

    <div>
        <button id="updateDetails">Update details</button>
    </div>


    <script>
        const updateButton = document.getElementById("imgbotao");
        const confirmButton = document.getElementById("submit");
        const cancelButton = document.getElementById("cancel");
        const dialog = document.getElementById("favDialog");
        const selectElement = document.getElementById("favAnimal");

        // Update button opens a modal dialog
        updateButton.addEventListener("click", () => {
            dialog.showModal();
        });
    </script>
</body>

</html>