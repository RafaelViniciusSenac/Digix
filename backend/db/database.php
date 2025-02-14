<?php
// Classe responsável pela conexão com o banco de dados
class Database
{
    // Propriedades que armazenam as informações de conexão com o banco de dados
    private $server = "localhost"; // Endereço do servidor MySQL (geralmente localhost)
    private $dbnome = "bancoDigix";   // Nome do banco de dados
    private $user = "root";        // Nome de usuário para conexão com o banco de dados (usuário padrão 'root' no MySQL)
    private $pass = "";            // Senha do usuário para conexão com o banco de dados (em branco para 'root' no local)

    // Método responsável por estabelecer a conexão com o banco de dados
    public function connect(){
        try {
            // Cria uma nova instância PDO para conectar ao banco de dados MySQL
            $conn = new PDO(
                "mysql:host=".$this->server.";dbname=".$this->dbnome, // String de conexão (host e nome do banco)
                $this->user, // Usuário para autenticação
                $this->pass  // Senha para autenticação
            );
            // Configura o modo de erro do PDO para lançar exceções
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // Retorna a conexão estabelecida
            return $conn;
        } catch (\Exception $e) {
            // Se ocorrer um erro durante a conexão, exibe a mensagem de erro
            echo "Erro no banco de dados: ".$e->getMessage();
        }
    }
}

// $db = new Database();
// $db->connect();