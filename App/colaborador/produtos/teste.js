const updateButton = document.getElementById("imgbotao");
const confirmButton = document.getElementById("submit");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("modal");
const btnVirar = document.getElementById("refresh");
const btnFechar = document.getElementById("fechar");
const flipCard = document.querySelector(".flip");

// Update button opens a modal dialog
updateButton.addEventListener("click", () => {
    dialog.showModal();
});

btnFechar.addEventListener("click", () => {
    dialog.close();
});

btnVirar.addEventListener("click", () => {
    flipCard.classList.toggle("virado");
});
