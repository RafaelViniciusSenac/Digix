<?php
// Simulação de uma lista de usuários (substitua por uma consulta ao banco de dados)
$usuarios = [
    ["nome" => "Fulano Junior Pereira", "email" => "fulano@example.com", "ra" => "123456", "status" => "inativo", "saldo" => 56000],
    ["nome" => "Fulano Machado", "email" => "fulano2@example.com", "ra" => "654321", "status" => "ativo", "saldo" => 12000],
];
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="lista_usuario.css">
    <link rel="stylesheet" href="/App/components/menu/menu_admin/menu_admin.css">
    <title>Lista de Usuários</title>
</head>
<body>
    <div class="container">
        <?php include '/App/components/menu/menu_admin/menu_admin.html'; ?> <!-- Inclui o menu administrativo -->

        <main class="main-content">
            <header class="top-bar">
                <div class="user-profile">
                    <span class="user-avatar">👤</span>
                    <span class="user-name">FULANO - ADM</span>
                </div>
            </header>

            <div class="content">
                <div class="content-header">
                    <h1>Usuários</h1>
                    <div class="actions">
                        <div class="search-box">
                            <input type="search" placeholder="Pesquisar usuário">
                            <span class="search-icon">🔍</span>
                        </div>
                        <button class="btn btn-primary-addcoin" onclick="openModal('addCoinsModal')">
                            <span class="icon">➕</span>
                            Adicionar moedas
                        </button>
                        <button class="btn btn-secondary" onclick="openModal('addUserModal')">
                            <span class="icon">➕</span>
                            Adicionar usuário
                        </button>
                    </div>
                </div>

                <div class="user-list">
                    <?php foreach ($usuarios as $usuario): ?>
                        <div class="user-item">
                            <input type="checkbox">
                            <span class="user-avatar">👤</span>
                            <span class="user-name"><?= $usuario['nome'] ?></span>
                            <span class="user-status <?= $usuario['status'] === 'inativo' ? 'inactive' : '' ?>">
                                <?= ucfirst($usuario['status']) ?>
                            </span>
                            <input type="number" class="balance-value" value="<?= $usuario['saldo'] ?>" readonly>
                            <button class="edit-btn" onclick="openModal('editUserModal')">✏️</button>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </main>

        <!-- Modal Adicionar Usuário -->
        <div id="addUserModal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <img src="/App/components/menu/imagens/logoAdmin.png" alt="Digix Logo" class="modal-logo">
                    <button class="close-btn" onclick="closeModal('addUserModal')">✕</button>
                </div>
                <form action="processar_formulario.php" method="POST" class="add-user-form">
                    <div class="form-group">
                        <label for="userName">Nome do Usuário</label>
                        <input type="text" id="userName" name="userName" placeholder="Nome de Usuário" required>
                    </div>
                    <div class="form-group">
                        <label for="userEmail">Email</label>
                        <input type="email" id="userEmail" name="userEmail" placeholder="Email" required>
                    </div>
                    <div class="form-group">
                        <label for="userRA">RA do Usuário</label>
                        <input type="text" id="userRA" name="userRA" placeholder="Número RA" required>
                    </div>
                    <div class="form-group">
                        <label for="tempPassword">Senha temporária</label>
                        <input type="text" id="tempPassword" name="tempPassword" placeholder="Senha" required>
                    </div>
                    <button type="submit" class="btn btn-primary submit-btn">Concluído</button>
                </form>
            </div>
        </div>

        <!-- Modal Editar Usuário -->
        <div id="editUserModal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <img src="/App/components/menu/imagens/logoAdmin.png" alt="Digix Logo" class="modal-logo">
                    <button class="close-btn" onclick="closeModal('editUserModal')">✕</button>
                </div>
                <form action="processar_formulario.php" method="POST" class="edit-user-form">
                    <div class="form-group">
                        <label for="editUserName">Nome do Usuário</label>
                        <input type="text" id="editUserName" name="editUserName" required>
                    </div>
                    <div class="form-group">
                        <label for="editUserEmail">Email</label>
                        <input type="email" id="editUserEmail" name="editUserEmail" required>
                    </div>
                    <div class="form-group">
                        <label for="editUserRA">RA do Usuário</label>
                        <input type="text" id="editUserRA" name="editUserRA" required>
                    </div>
                    <div class="form-group balance-control">
                        <label>Gerenciar saldo</label>
                        <div class="balance-input">
                            <button type="button" class="balance-btn decrease">-</button>
                            <input type="number" name="balanceValue" class="balance-value" value="0">
                            <button type="button" class="balance-btn increase">+</button>
                        </div>
                    </div>
                    <div class="user-actions">
                        <button type="button" class="btn btn-danger">Desativar usuário</button>
                        <button type="button" class="btn btn-success">Ativar usuário</button>
                    </div>
                    <button type="submit" class="btn btn-primary submit-btn">Concluído</button>
                </form>
            </div>
        </div>

        <!-- Modal Adicionar Moedas -->
        <div id="addCoinsModal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <img src="/App/components/menu/imagens/logoAdmin.png" alt="Digix Logo" class="modal-logo">
                    <button class="close-btn" onclick="closeModal('addCoinsModal')">✕</button>
                </div>
                <form action="processar_formulario.php" method="POST" class="coins-form">
                    <h2 class="modal-title">Gerenciar digicoins</h2>
                    <div class="form-group">
                        <label for="coinsAmount">Quantidade a ser adicionada</label>
                        <input type="number" id="coinsAmount" name="coinsAmount" placeholder="5.000" required>
                    </div>
                    <div class="coins-actions">
                        <button type="submit" name="adicionarMoedas" class="btn btn-primary-addcoin">Adicionar</button>
                        <button type="submit" name="removerMoedas" class="btn btn-secondary">Remover</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="lista_usuario.js"></script>
</body>
</html>