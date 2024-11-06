class Grid {
    constructor(itens = [], config = {}) {
      this.listaGrid = itens;
      this.config = config;
      this.ascending = true;
      this.cartItemsContainer = document.getElementById(config.containerId);
      this.botoesOrdenar = document.querySelectorAll(config.sortButtonSelector);
  
      this.botoesOrdenar.forEach((botao) => {
        const coluna = botao.getAttribute('data-valor');
        botao.addEventListener("click", () => {
          this.ordenarItensGrid(botao, coluna);
        });
      });
  
      this.preencherGrid();
    }
  
    preencherGrid() {
      this.cartItemsContainer.innerHTML = ""; // Limpa os itens existentes
  
      this.listaGrid.forEach((item) => { // Para cada item no grid
        const itemRow = document.createElement("tr");
        itemRow.innerHTML = this.config.formatarGrid(item);
        this.cartItemsContainer.appendChild(itemRow);
      });
  
      // Adiciona os eventos após preencher a grid
      this.addEventosGrid();
      
      if (this.config.atualizarTotal) {
        this.config.atualizarTotal();
      }
    }
  
    addEventosGrid() {
      this.listaGrid.forEach((item) => {
        const inputQtd = document.querySelector(`input[data-id="${item.id}"]`);
        const botaoRemover = document.querySelector(`button[data-id="${item.id}"]`);
  
        if (inputQtd) {
          inputQtd.addEventListener('change', (event) => {
            this.verificarValorMax(event.target);
            this.atualizarQtdItensGrid(item.id, event.target.value);
          });
        }
  
        if (botaoRemover) {
          botaoRemover.addEventListener('click', () => {
            this.removerItensGrid(item.id);
          });
        }
      });
    }
  
    ordenarItensGrid(element, coluna) {
      if (element.className === 'sort-desc') {
        element.className = 'sort-asc';
        this.listaGrid.sort((a, b) => {
          return a[coluna].localeCompare(b[coluna]);
        });
      } else {
        element.className = 'sort-desc';
        this.listaGrid.sort((a, b) => {
          return b[coluna].localeCompare(a[coluna]);
        });
      }
      this.preencherGrid();
    }
  
    removerItensGrid(valorId) {
      const index = this.listaGrid.findIndex(item => item.id === parseInt(valorId));
      if (index !== -1) {
        this.listaGrid.splice(index, 1);
        this.preencherGrid();
      }
    }
  
    atualizarQtdItensGrid(valorId, novaQuantidade) {
      const index = this.listaGrid.findIndex(item => item.id === parseInt(valorId));
      if (index !== -1) {
        this.listaGrid[index].qtd = novaQuantidade;
        this.preencherGrid();
      }
    }
  
    verificarValorMax(input) {
      var max = parseInt(input.max);
      var min = parseInt(input.min);
      if (input.value > max) {
        input.value = max;
      }
      if (input.value < min) {
        input.value = min;
      }
    }
  }
  
  export default Grid;
  