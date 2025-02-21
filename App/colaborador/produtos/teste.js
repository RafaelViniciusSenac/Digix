const updateButton = document.getElementById("imgbotao");
const confirmButton = document.getElementById("submit");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("modal");
const btnVirarTras = document.getElementById("refresh");
const btnVirarFrente = document.getElementById("refresh2");
const btnFechar = document.getElementById("fechar");
const btnFechar2 = document.getElementById("fechar2");
const flipCard = document.querySelector(".flip");
console.log(btnFechar)

// Update button opens a modal dialog
if (updateButton) {
    updateButton.addEventListener("click", () => {
        dialog.showModal();
    });
}

if (btnFechar) {
    btnFechar.addEventListener("click", () => {
        dialog.close();
    });
}

if (btnFechar2) {
    btnFechar2.addEventListener("click", () => {
        dialog.close();
    });
}
btnVirarTras.addEventListener("click", () => {
    flipCard.classList.remove("virado2");
    flipCard.classList.toggle("virado");
});

btnVirarFrente.addEventListener("click", () => {
    flipCard.classList.remove("virado");
    flipCard.classList.toggle("virado2");
});

dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});