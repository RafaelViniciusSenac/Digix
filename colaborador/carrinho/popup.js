function showPopup(conteudo) {
    // Remove o elemento anterior, se existir
    var oldPopup = document.querySelector(".popup");
    if (oldPopup) oldPopup.remove();
  
    // Cria os elementos
    const popup = document.createElement("div");
    const popupHeader = document.createElement("div");
    const popupTitulo = document.createElement("div");
    const imgClosed = document.createElement("img");
    const popupBody = document.createElement("div");

  
    // Define as classes e atributos
    popup.className = "popup";
    popupHeader.className = "popup-header";
    popupTitulo.className = "popup-titulo";
    imgClosed.className = "popup-closed";
    imgClosed.src = "img/closed.png";
    imgClosed.alt = "Fechar";
    imgClosed.setAttribute("onclick", "hidePopup()");
    popupBody.className = "popup-body";

    // Adiciona os elementos ao DOM
    popupHeader.appendChild(popupTitulo);
    popupHeader.appendChild(imgClosed);
    popup.appendChild(popupHeader);
    document.body.appendChild(popup);
  
    // Adiciona o conteúdo
    popupBody.innerHTML = conteudo;
    popup.appendChild(popupBody);
  
    // Mostra o popup
    popup.style.display = "flex";
  }
  
  function hidePopup() {
    document.querySelector(".popup").style.display = "none";
  }