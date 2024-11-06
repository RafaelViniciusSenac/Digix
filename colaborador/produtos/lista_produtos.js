const botaoProdutos = document.getElementById("imgbotao")
const fecharX = document.getElementById("fechar")
const dialog = document.getElementById("cardProdutos")

botaoProdutos.addEventListener("click", function(){
    dialog.showModal();
    document.body.style.overflow = "hidden";
})

function fecharCard(i, n){
}

fecharX.addEventListener("click", function(){
    dialog.close();
    document.body.style.overflow = ""
})