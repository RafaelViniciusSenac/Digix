var car = [ // Simula o carrinho
  {
      id: 1,
      posicao: 1,
      nome: "Fulano Brasil",
      valor: 2000,
  },
  {
    id: 1,
    posicao: 2,
    nome: "Fulano Silva",
    valor: 1500,
},
{
    id: 1,
    posicao: 3,
    nome: "Fulano Pereira",
    valor: 1000,
},
{
    id: 1,
    posicao: 4,
    nome: "Fulano Campos",
    valor: 800,
},
{
    id: 1,
    posicao: 5,
    nome: "Fulano Souza",
    valor: 500,
},
];
let ascending = true;
const qtdDigicoins = 10000;//Simula quantidade de digicoins

function preencherCarrinho(carrinho) {
  car = carrinho;
  const cartItemsContainer = document.getElementById("cart-items");

  cartItemsContainer.innerHTML = ""; // Limpa os itens existentes

  car.forEach((item) => { // Para cada item no carrinho
    let valor = parseFloat(item.valor); // passa o valor para float
    let posicao = parseInt(item.posicao); // passa a quantidade para int
    const itemRow = document.createElement("tr");
    itemRow.innerHTML = `
        <td data-label="Posicao">${item.posicao}</td>
        <td data-label="Nomes">${item.nome}</td>
        <td data-label="Valor"><span class="cor-moeda">D$</span> <span class="cor-valor">${item.valor}</span></td>
      `;
    cartItemsContainer.appendChild(itemRow);
  });
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