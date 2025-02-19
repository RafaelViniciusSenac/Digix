const updateButton = document.getElementById("imgbotao");
const confirmButton = document.getElementById("submit");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("modal");

// Update button opens a modal dialog
updateButton.addEventListener("click", () => {
    dialog.showModal();
});