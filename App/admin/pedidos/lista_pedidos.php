
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pedidos Pendentes</title>
    <link rel="stylesheet" href="pedidos.css">
    <link rel="stylesheet" href="../../components/menu/menu_admin/menu_admin.css">
    <link rel="stylesheet" href="../../components/menu/menu_colaborador/menu_colaborador.css">
</head>
<body>
 <div id="menuColaborador" class="menuColaborador"></div> <!--  div onde ficará o menu, deve possuir esse nome como id -->

    <div class="conteiner">
        <div class="titulo">
            <h2>Pedidos pendentes</h2>
        </div>
        <table>
            <thead>
                <tr>
                <th width="150px">Miuse - Ped</th>
                <th width="150px">Fone</th>
                <th width="150px">Fone</th>
                </tr>
            </thead>
            <tbody id="cart-items">
            </tbody>
        </table>  
        <div class="titulo">
            <h2>Pedidos concluidos</h2> 
        </div>
        
        
        <table>
            <thead>
                <tr>
                <th width="150px">Fones</th>
                <th width="150px">Fones</th>
                <th width="150px">Fones</th>
                </tr>
            </thead>
            <tbody id="cart-items">
            </tbody>
        </table>   

    </div>

    <?php include "../../components/menu/menu_admin/menu_admin.html"?>
    <script src="../../components/menu/menu_admin/menu_admin.js"></script> 
    <script src="../../components/menu/menu_colaborador/menu_colaborador.js"></script> 
</body>
</html>