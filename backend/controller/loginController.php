<?php
// Inclui o arquivo de conexão com o banco de dados
include_once __DIR__ . "/../db/database.php";

// Define a classe LoginController responsável pela autenticação de usuários
class LoginController
{
    private $conn; // Variável para armazenar a conexão com o banco de dados

    // Construtor da classe, inicializa a conexão com o banco de dados
    public function __construct(){
        // Cria uma instância da classe Database para obter a conexão
        $database = new Database();
        // Armazena a conexão na variável $conn
        $this->conn = $database->connect();
    }

    // Método responsável por realizar o login
    public function Login($email, $senha){
        try {
            // Prepara a consulta SQL para verificar se o nome e a senha coincidem com um usuário no banco de dados
            $sql = "SELECT * FROM usuario WHERE email = :email AND senha = :senha";
            // Prepara a consulta SQL com a conexão do banco de dados
            $db = $this->conn->prepare($sql);
            // Vincula os parâmetros da consulta SQL com os valores fornecidos para nome e senha
            $db->bindParam(":email", $email);
            $db->bindParam(":senha", $senha);
            // Executa a consulta no banco de dados
            $db->execute();
            // Recupera os resultados da consulta (todos os usuários que atendem aos critérios)
            $usuario = $db->fetchAll(PDO::FETCH_ASSOC);

            // Verifica se um usuário foi encontrado com os dados fornecidos
            if ($usuario) {
                // Inicia a sessão para armazenar informações do usuário logado
                session_start();
                // Armazena o ID do usuário na sessão para uso posterior
                $_SESSION["id_usuario"] = $usuario[0]["idUsuario"];
                $_SESSION["nome"] = $usuario[0]["nome"];
                $_SESSION["cargo"] = $usuario[0]["cargo"];
                echo "login realizado";
                // Retorna verdadeiro para indicar que o login foi bem-sucedido
                return true;
            } else {
                // Se o usuário não for encontrado, retorna falso indicando falha no login
                echo "login não realizado";
                return false;
            }

        } catch (\Exception $e) {
            // Caso ocorra algum erro durante o processo, exibe uma mensagem de erro
            echo "Erro: " . $e->getMessage();
        }
    }
}
