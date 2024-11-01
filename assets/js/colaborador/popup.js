async function showPopup(conteudo, titulo = ' ') {
    await loadCSS('../../assets/css/colaborador/popup.css');

    // Remove o elemento anterior, se existir
    var oldPopup = document.querySelector(".overlay");
    if (oldPopup) oldPopup.remove();

    // Cria os elementos
    const overlay = document.createElement("div");
    const popup = document.createElement("div");
    const popupHeader = document.createElement("div");
    const popupTitulo = document.createElement("div");
    const imgClosed = document.createElement("img");
    const popupBody = document.createElement("div");

    // Define as classes e atributos
    overlay.className = "overlay";
    popup.className = "popup";
    popupHeader.className = "popup-header";
    popupTitulo.className = "popup-titulo";
    imgClosed.className = "popup-closed";
    imgClosed.src = "../../assets/images/colaborador/bt_closed.png";
    imgClosed.alt = "Fechar";
    imgClosed.addEventListener("click", hidePopup);
    popupBody.className = "popup-body";

    // Adiciona os elementos ao DOM
    popupHeader.appendChild(popupTitulo);
    popupHeader.appendChild(imgClosed);
    popup.appendChild(popupHeader);
    popup.appendChild(popupBody);
    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    // Adiciona o conteúdo
    popupTitulo.innerHTML = titulo;
    popupBody.innerHTML = conteudo;

    // Mostra o popup
    overlay.style.display = "flex";
    document.body.classList.add('no-scroll');
}

async function loadCSS(cssUrl) {
    // Verifica se o CSS já está carregado
    if (!document.querySelector(`link[href="${cssUrl}"]`)) {
        // Cria um novo elemento link
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssUrl;

        // Adiciona o link ao head do documento
        document.head.appendChild(link);

        // Espera o CSS ser carregado
        await new Promise((resolve) => {
            link.onload = resolve;
        });
    }
}

function hidePopup() {
  var overlay = document.querySelector(".overlay");
  if (overlay) overlay.style.display = "none";
  document.body.classList.remove('no-scroll');
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        hidePopup();
    }
});

