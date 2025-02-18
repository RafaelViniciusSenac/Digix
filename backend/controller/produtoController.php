<?php
include_once __DIR__ . "/../db/database.php";

class ProdutoController
{
    private $conn;

    public function __construct()
    {
        $database = new Database();
        $this->conn = $database->connect();
    }

    public function GetAllProduto(){
        try {
            $sql = "SELECT * FROM produto";
            $db = $this->conn->prepare($sql);
            $db->execute();
            $produto = $db->fetchAll(PDO::FETCH_ASSOC);
            return $produto;
        } catch (\Exception $th) {
            return $th->getMessage();
        }
    }

    public function GetAllProdutoAtivos(){
        try {
            $sql = "SELECT * FROM produto WHERE estado = 'ativo'";
            $db = $this->conn->prepare($sql);
            $db->execute();
            $produto = $db->fetchAll(PDO::FETCH_ASSOC);
            return $produto;
        } catch (\Exception $th) {
            return $th->getMessage();
        }
    }

    public function GetAllProdutoInativos(){
        try {
            $sql = "SELECT * FROM produto WHERE estado = 'inativo'";
            $db = $this->conn->prepare($sql);
            $db->execute();
            $produto = $db->fetchAll(PDO::FETCH_ASSOC);
            return $produto;
        } catch (\Exception $th) {
            return $th->getMessage();
        }
    }

    


}