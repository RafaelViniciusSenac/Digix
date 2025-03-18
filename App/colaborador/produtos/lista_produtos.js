document.addEventListener("DOMContentLoaded", function () {
    const dialog = document.getElementById("modal");
    const flipCard = document.querySelector(".flip");
    const fecharBtns = document.querySelectorAll("#fechar, #fechar2");
    const imgButtons = document.querySelectorAll(".imgD button"); // Todos os botões que envolvem imagens
    const btnVirarTras = document.getElementById("refresh");
    const btnVirarFrente = document.getElementById("refresh2");

    // Adiciona evento para abrir o modal ao clicar nas imagens
    imgButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const img = this.querySelector("img"); // Pega a imagem dentro do botão
            const modalImg = document.querySelector(".ImProduto"); // Imagem do modal
            const nomeProduto = document.querySelectorAll(".NProduto"); // Nome do produto no modal
            
            // Atualiza os dados do modal
            modalImg.src = img.src;
            nomeProduto.forEach(el => el.textContent = img.alt); // Define o nome do produto no modal
            
            dialog.showModal(); // Abre o modal
        });
    });

    // Fecha o modal ao clicar nos botões "X"
    fecharBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            dialog.close();
        });
    });

    // Alternar entre frente e verso do card
    btnVirarTras.addEventListener("click", () => {
        flipCard.classList.remove("virado2");
        flipCard.classList.toggle("virado");
    });

    btnVirarFrente.addEventListener("click", () => {
        flipCard.classList.remove("virado");
        flipCard.classList.toggle("virado2");
    });

    // Fecha o modal ao clicar fora do conteúdo
    dialog.addEventListener("click", (event) => {
        const container = document.querySelector(".container");
        if (!container.contains(event.target)) {
            dialog.close();
        }
    });
});

