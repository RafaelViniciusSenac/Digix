<?php
include_once __DIR__ . "/../db/database.php";

class UserController
{
    private $conn;

    public function __construct()
    {
        $database = new Database();
        $this->conn = $database->connect();
    }

    public function GetAllUser(){
        try {
            $sql = "SELECT * FROM usuario WHERE cargo = 'usuario'";
            $db = $this->conn->prepare($sql);
            $db->execute();
            $user = $db->fetchAll(PDO::FETCH_ASSOC);
            return $user;
        } catch (\Exception $th) {
            return $th->getMessage();
        }
    }

    public function GetAllUserAtivos(){
        try {
            $sql = "SELECT * FROM usuario WHERE estado = 'ativo' AND cargo = 'usuario'";
            $db = $this->conn->prepare($sql);
            $db->execute();
            $user = $db->fetchAll(PDO::FETCH_ASSOC);
            return $user;
        } catch (\Exception $th) {
            return $th->getMessage();
        }
    }

    public function GetAllUserInativos(){
        try {
            $sql = "SELECT * FROM usuario WHERE estado = 'inativo' AND cargo = 'usuario'";
            $db = $this->conn->prepare($sql);
            $db->execute();
            $user = $db->fetchAll(PDO::FETCH_ASSOC);
            return $user;
        } catch (\Exception $th) {
            return $th->getMessage();
        }
    }

    public function CreateUser($nome, $email, $ra, $senha, $cargo){
        try {
            $sql = "INSERT INTO usuario (nome,senha) VALUES(:nome,:senha)";
            $db = $this->conn->prepare($sql);
            $db->bindParam(":nome", $nome);
            $db->bindParam(":email", $email);
            $db->bindParam(":ra", $ra);
            $db->bindParam(":senha", $senha);
            $db->bindParam(":cargo", $cargo);
            if($db->execute()){
                return true;
            }else{
                return false;
            }
        } catch (\Exception $th) {
            //throw $th;
        }
    }

    public function UpdateUser($idUsuario,$nome, $email, $ra, $senha, $saldo, $estado, $cargo){
        try {
            $sql = "UPDATE usuario SET nome = :nome, email = :email, ra = :ra, senha = :senha, saldo = :saldo, estado = :estado, cargo = :cargo WHERE idUsuario = :idUsuario";
            $db = $this->conn->prepare($sql);
            $db->bindParam(":nome", $nome);
            $db->bindParam(":email", $email);
            $db->bindParam(":ra", $ra);
            $db->bindParam(":senha", $senha);
            $db->bindParam(":saldo", $saldo);
            $db->bindParam(":estado", $estado);
            $db->bindParam(":cargo", $cargo);
            $db->bindParam(":idUsuario", $idUsuario);
            if($db->execute()){
                return true;
            }else{
                return false;
            }
        } catch (\Exception $th) {
            //throw $th;
        }
    }

    public function GetUserById($idUsuario){
        try {
            $sql = "SELECT * FROM usuario WHERE idUsuario = :idUsuario";
            $db = $this->conn->prepare($sql);
            $db->bindParam(":idUsuario", $idUsuario);
            $db->execute();
            $user = $db->fetch(PDO::FETCH_ASSOC);
            return $user;
        } catch (\Exception $th) {
            //throw $th;
        }
    }

    public function GetUserByNome($nome){
        try {
            $sql = "SELECT * FROM usuario WHERE nome = :nome";
            $db = $this->conn->prepare($sql);
            $db->bindParam(":nome", $nome);
            $db->execute();
            $user = $db->fetch(PDO::FETCH_ASSOC);
            return $user;
        } catch (\Exception $th) {
            //throw $th;
        }
    }
}
