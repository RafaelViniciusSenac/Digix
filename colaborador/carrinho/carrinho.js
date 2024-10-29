var car = [ // Simula o carrinho
  {
      id: 1,
      nome: "Produto 1",
      valor: "2900",
      qtd: 2,
      qtd_estoque: 2,
      tipo_fisico: true
  },
  {
      id: 2,
      nome: "Produto 2",
      valor: "4900",
      qtd: 1,
      qtd_estoque: 5,
      tipo_fisico: false
  },
  {
      id: 3,
      nome: "Produto 3",
      valor: "1900",
      qtd: 3,
      qtd_estoque: 20,
      tipo_fisico: false
  },
  {
      id: 4,
      nome: "Produto 4",
      valor: "3900",
      qtd: 1,
      qtd_estoque: 10,
      tipo_fisico: false
  },
  {
      id: 5,
      nome: "Produto 5 - muito bom",
      valor: "5900",
      qtd: 2,
      qtd_estoque: 15,
      tipo_fisico: true
  }
];
let ascending = true;
const qtdDigicoins = 10000;//Simula quantidade de digicoins

function preencherCarrinho(carrinho) {
  car = carrinho;
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");

  cartItemsContainer.innerHTML = ""; // Limpa os itens existentes

  let totalCarrinho = 0;
  let totalItens = 0;
  car.forEach((item) => { // Para cada item no carrinho
    let valor = parseFloat(item.valor); // passa o valor para float
    let qtd = parseInt(item.qtd); // passa a quantidade para int
    let qtdEstoque = parseInt(item.qtd_estoque); // passa a quantidade de estoque para int
    let totalProduto = qtd * valor; 
    totalCarrinho += totalProduto;
    totalItens += qtd;
    const itemRow = document.createElement("tr");
    itemRow.innerHTML = `
        <td data-label="Nome">${item.nome}</td>
        <td data-label="Qtd">
          <input type="number" value="${qtd}" min="1" max="${qtdEstoque}" onchange="verificarValorMax(this);atualizarQuantidade('${item.id}', this.value)">
        </td>
        <td data-label="Valor"><span class="cor-moeda">D$</span> <span class="cor-valor">${totalProduto}</span></td>
        <td data-label="Opções">
          <button class="botao-remover" onclick="removerItem('${item.id}')"><img src="img/remover.png"></button>
        </td>
      `;
    cartItemsContainer.appendChild(itemRow);
  });
  let botaoFinalizar = document.getElementById("botaoFinalizarPedido");
  if(totalCarrinho > qtdDigicoins){
    botaoFinalizar.disabled=true;
  }else{
    botaoFinalizar.disabled=false;
  }
  cartTotalElement.textContent = totalCarrinho;
}

function atualizarQuantidade(id, novaQuantidade) {
  // Encontra o índice do item com o id fornecido
  const index = car.findIndex(item => item.id === parseInt(id));
  // Verifica se o item foi encontrado
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

function ordenarItens(element, propriedade) {
  if (element.className==='sort-desc') {
    element.className = 'sort-asc';
    car.sort((a, b) => {
        return a[propriedade].localeCompare(b[propriedade])
    });
  } else {
    element.className = 'sort-desc';
    car.sort((a, b) => {
      return b[propriedade].localeCompare(a[propriedade]);
    });
  }
  console.log(car);
  preencherCarrinho(car);
}

function finalizarPedido(){
  alert("Finalizar pedido");
}

document.addEventListener("DOMContentLoaded", () => {
    preencherCarrinho(car);
});

