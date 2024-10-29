var car = [
    {
        id: 1,
        nome: "Produto 1",
        valor: "2900",
        qtd: 2,
        qtd_estoque: 10
    },
    {
        id: 2,
        nome: "Produto 2",
        valor: "4900",
        qtd: 1,
        qtd_estoque: 5
    },
    {
        id: 3,
        nome: "Produto 3",
        valor: "1900",
        qtd: 3,
        qtd_estoque: 20
    }
  ];
function preencherCarrinho(carrinho) {
  car = carrinho;
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");
  const cartQuantityElement = document.querySelector(".tex-qtd-itens");

  cartItemsContainer.innerHTML = ""; // Limpa os itens existentes

  let totalCarrinho = 0;
  let totalItens = 0;

  car.forEach((item) => {
    let valor = parseFloat(item.valor);
    let qtd = parseInt(item.qtd);
    let qtd_estoque = parseInt(item.qtd_estoque);
    let totalProduto = qtd * valor;
    totalCarrinho += totalProduto;
    totalItens += qtd;
    // cria elemento tr e adiciona class="row-wrapper"
    const itemRow = document.createElement("tr");
    itemRow.innerHTML = `
        <td data-label="Nome">${item.nome}</td>
        <td data-label="Qtd">
          <input type="number" value="${qtd}" min="1" max="${
      qtd_estoque + qtd
    }" onchange="verificarValorMax(this);atualizarQuantidade('${item.id}', this.value)" class="quantidade-input">
        </td>
        <td data-label="Total"><span class="cor-moeda">D$</span> <span class="cor-valor">${totalProduto}</span></td>
        <td data-label="Opções">
          <button class="remove-button" onclick="removerItem('${item.id}')"><img src="img/remover.png"></button>
        </td>
      `;
    cartItemsContainer.appendChild(itemRow);
  });

  cartTotalElement.textContent = totalCarrinho;
  cartQuantityElement.textContent = `${totalItens} itens`;

  // Adiciona eventos para alterar a quantidade e remover itens

}

function atualizarQuantidade(id, novaQuantidade) {
  // Atualiza a quantidade do item no carrinho
  const index = car.findIndex(item => item.id === parseInt(id));
  if (index !== -1) {
    car[index].qtd = novaQuantidade;
    // Atualiza o localStorage
    localStorage.setItem("cart", JSON.stringify(car));
    // Recalcula e atualiza o carrinho
    preencherCarrinho(car);
    //syncLocalCartToServer(car);
  }
}

function removerItem(id) {
    // Encontra o índice do item com o id fornecido
    const index = car.findIndex(item => item.id === parseInt(id));
    
    // Verifica se o item foi encontrado
    if (index !== -1) {
      // Remove o item do array
      car.splice(index, 1);
      
      // Atualiza o localStorage
      localStorage.setItem("cart", JSON.stringify(car));
      
      // Recalcula e atualiza o carrinho
      preencherCarrinho(car);
      
      //syncLocalCartToServer(car); // Se necessário
    }
  }

function verificarValorMax(input) {
    var max = parseInt(input.max);
    var min = parseInt(input.min);
    if (input.value > max) {
      input.value = max;
    }
    if (input.value < min) {
      input.value = min;
    }
  }

document.addEventListener("DOMContentLoaded", () => {
    preencherCarrinho(car);
});
