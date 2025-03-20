var car = [ // Simula o carrinho
  {
      data: "24/04/2009",
      nome: "Produto 1",
      valor: "2900",
      qtd: 2,
  },
  {
      data: "24/04/1009",
      nome: "Produto 2",
      valor: "4900",
      qtd: 1,
  },
  {
      data: "24/04/2019",
      nome: "Produto 3",
      valor: "1900",
      qtd: 3,
  },
  {
      data: "24/04/2010",
      nome: "Produto 4",
      valor: "3900",
      qtd: 1,
  },
  {
      data: "24/04/2011",
      nome: "Produto 5 ",
      valor: "5900",
      qtd: 2,
  }
];


function preencherCarrinho(carrinho) {
  const cartItemsContainer = document.getElementById("cart-items");


  cartItemsContainer.innerHTML = ""; // Limpa os itens existentes

  let totalCarrinho = 0;
  carrinho.forEach((item) => { // Para cada item no carrinho
    let valor = parseFloat(item.valor); // passa o valor para float
    let qtd = parseInt(item.qtd); // passa a quantidade para int
    let totalProduto = qtd * valor; 
    totalCarrinho += totalProduto;

    const itemRow = document.createElement("tr");
    itemRow.innerHTML = `
        <td data-label="Nome">${item.nome}</td>
        <td data-label="Qtd">${item.qtd}</td>
        <td data-label="Opções">${item.data}</td>
        <td data-label="Valor"><span class="cor-moeda">DG$</span> <span class="cor-valor">${totalProduto}</span></td>
      `;

    cartItemsContainer.appendChild(itemRow);
  });
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

document.addEventListener("DOMContentLoaded", () => {
    preencherCarrinho(car);
});

