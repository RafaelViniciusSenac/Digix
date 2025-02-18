<?php
include_once __DIR__ . "/../db/database.php";

$timezone = new DateTimeZone('America/Campo_Grande');
$agora = new DateTime('now', $timezone);

$dataAtual = $agora->format('d-m-Y');



class CampanhaController
{
    private $conn;

    public function __construct()
    {
        $database = new Database();
        $this->conn = $database->connect();
    }

    public function GetAllCampanha(){
        try {
            $sql = "SELECT * FROM campanha";
            $db = $this->conn->prepare($sql);
            $db->execute();
            $campanha = $db->fetchAll(PDO::FETCH_ASSOC);
            return $campanha;
        } catch (\Exception $th) {
            return $th->getMessage();
        }
    }

    public function GetAllCampanhaAtivos(){
        try {
            $sql = "SELECT * FROM campanha WHERE estado = 'ativo'";
            $db = $this->conn->prepare($sql);
            $db->execute();
            $campanha = $db->fetchAll(PDO::FETCH_ASSOC);
            return $campanha;
        } catch (\Exception $th) {
            return $th->getMessage();
        }
    }

    public function GetAllCampanhaInativos(){
        try {
            $sql = "SELECT * FROM campanha WHERE estado = 'inativo'";
            $db = $this->conn->prepare($sql);
            $db->execute();
            $campanha = $db->fetchAll(PDO::FETCH_ASSOC);
            return $campanha;
        } catch (\Exception $th) {
            return $th->getMessage();
        }
    }

    public function CreateCampanhaSemData($nome, $descricao){
        try {
            $sql = "INSERT INTO campanha (nome,descricao) VALUES(:nome,:descricao)";
            $db = $this->conn->prepare($sql);
            $db->bindParam(":nome", $nome);
            $db->bindParam(":descricao", $descricao);

            if($db->execute()){
                return true;
            }else{
                return false;
            }
        } catch (\Exception $th) {
            //throw $th;
        }
    }

    public function CreateCampanhaComData($nome, $descricao, $dataInicio, $dataFim){
        try {
            $sql = "INSERT INTO campanha (nome,descricao,dataInicio,dataFim) VALUES(:nome,:descricao,:dataInicio,:dataFim)";
            $db = $this->conn->prepare($sql);
            $db->bindParam(":nome", $nome);
            $db->bindParam(":descricao", $descricao);
            $db->bindParam(":dataInicio", $dataInicio);
            $db->bindParam(":dataFim", $dataFim);

            if($db->execute()){
                return true;
            }else{
                return false;
            }
        } catch (\Exception $th) {
            //throw $th;
        }
    }
    


}