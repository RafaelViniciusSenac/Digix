fetch('/App/components/menu/menu_admin/menu_admin.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('menu_admin').innerHTML = data;
            });

// Funções para abrir e fechar modais
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Adicionar usuário
document.querySelector('.add-user-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const userRA = document.getElementById('userRA').value;

    if (!userName || !userEmail || !userRA) {
        alert('Preencha todos os campos!');
        return;
    }

    const userList = document.querySelector('.user-list');
    const newUser = document.createElement('div');
    newUser.classList.add('user-item');
    newUser.innerHTML = `
        <input type="checkbox">
        <span class="user-avatar">👤</span>
        <span class="user-name">${userName}</span>
        <span class="user-status inactive">Desativado</span>
        <button class="edit-btn" onclick="openModal('editUserModal'); loadUserData(this)">✏️</button>
    `;
    userList.appendChild(newUser);

    closeModal('addUserModal');
    document.querySelector('.add-user-form').reset();
});

// Carregar dados do usuário no modal de edição
function loadUserData(button) {
    const userItem = button.closest('.user-item');
    const userName = userItem.querySelector('.user-name').textContent;
    const userStatus = userItem.querySelector('.user-status').classList.contains('inactive') ? 'inactive' : 'active';

    document.getElementById('editUserName').value = userName;
    document.getElementById('editUserModal').dataset.userIndex = Array.from(userItem.parentElement.children).indexOf(userItem);
}

// Editar usuário
document.querySelector('.edit-user-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const userIndex = document.getElementById('editUserModal').dataset.userIndex;
    const userList = document.querySelectorAll('.user-item')[userIndex];
    const userName = document.getElementById('editUserName').value;

    userList.querySelector('.user-name').textContent = userName;

    closeModal('editUserModal');
});

// Ativar/Desativar usuário
document.querySelector('.btn-danger').addEventListener('click', function () {
    const userIndex = document.getElementById('editUserModal').dataset.userIndex;
    const userList = document.querySelectorAll('.user-item')[userIndex];
    userList.querySelector('.user-status').textContent = 'Desativado';
    userList.querySelector('.user-status').classList.add('inactive');
});

document.querySelector('.btn-success').addEventListener('click', function () {
    const userIndex = document.getElementById('editUserModal').dataset.userIndex;
    const userList = document.querySelectorAll('.user-item')[userIndex];
    userList.querySelector('.user-status').textContent = 'Ativo';
    userList.querySelector('.user-status').classList.remove('inactive');
});

// Adicionar moedas apenas para usuários selecionados
document.querySelector('.coins-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const coinsAmount = document.getElementById('coinsAmount').value;
    if (!coinsAmount) {
        alert('Insira uma quantidade válida!');
        return;
    }

    const userItems = document.querySelectorAll('.user-item');
    userItems.forEach(user => {
        const checkbox = user.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            const balanceValue = user.querySelector('.balance-value');
            const currentBalance = parseInt(balanceValue.value) || 0;
            const newBalance = currentBalance + parseInt(coinsAmount);
            balanceValue.value = newBalance;
        }
    });

    closeModal('addCoinsModal');
});

// Pesquisar usuário
document.querySelector('.search-box input').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const userItems = document.querySelectorAll('.user-item');

    userItems.forEach(user => {
        const userName = user.querySelector('.user-name').textContent.toLowerCase();
        if (userName.includes(searchTerm)) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    });
});