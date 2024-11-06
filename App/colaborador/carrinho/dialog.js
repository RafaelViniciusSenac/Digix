async function showDialog() {
    await loadCSS('dialog.css');

    // Seleciona o dialog
    const dialog = document.getElementById('popupDialog');

    // Mostra o dialog
    dialog.showModal();
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

function hideDialog() {
    const dialog = document.getElementById('popupDialog');
    if (dialog) dialog.close();
    document.body.classList.remove('no-scroll');
}

// Fechar o popup com a tecla Esc
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        hideDialog();
    }
});
