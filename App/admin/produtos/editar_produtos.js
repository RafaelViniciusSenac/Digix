const modal = document.querySelector("dialog")
const buttonOpen = document.querySelector(".buttonOpen");
const buttonClose = document.querySelector(".buttonClose")

buttonOpen.addEventListener("click", function() {
    modal.showModal();

});

buttonClose.addEventListener("click", function() {
    modal.close();
});



