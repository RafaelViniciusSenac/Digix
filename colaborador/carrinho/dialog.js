function fecharDialog() {
    document.getElementById("popup").close();
}

function abrirDialog() {
    document.getElementById("popup").showModal();
}

function desativarEnderecoForm(acao) {
    const enderecoForm = document.getElementById('endereco');
    if (acao) {
        console.log('desativar');
        const camposForms = enderecoForm.querySelectorAll('input, select');
        [].forEach.call(camposForms, function (el) {
            el.setAttribute('disabled', 'disabled');
        });
        enderecoForm.classList.remove('form-endereco-ativo');
        enderecoForm.classList.add('form-endereco-desativado');
    } else {
        console.log('ativar');
        // ativa inputs e selects
        const camposForms = enderecoForm.querySelectorAll('input, select');
        [].forEach.call(camposForms, function (el) {
            el.removeAttribute('disabled');
        });
        enderecoForm.classList.remove('form-endereco-desativado');
        enderecoForm.classList.add('form-endereco-ativo');
    }
  } 