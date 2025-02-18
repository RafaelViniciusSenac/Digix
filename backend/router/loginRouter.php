<?php 
require __DIR__ . "../controller/loginController.php";

$loginController = new LoginController;

if($_SERVER['REQUEST_METHOD'] == 'POST')
{
    switch($_GET['action'])
    {
        case 'login':
            $resultado = $loginController->Login($_POST['email'], $_POST['senha']);

            if($resultado)
            {
                header("Location: ./App/colaborador/Home/Home.php");
            }
            else
            {
                header("Location: index.php");
            }
            break;
            
        default:
            header("Location: index.php");
            break;
    }
}





?>