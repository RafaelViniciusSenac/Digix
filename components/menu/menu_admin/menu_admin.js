async function puxarMenu(){ 
    fetch('http://127.0.0.1:5501/components/menu/menu_admin/menu_admin.html').then(response => response.text()).then(data =>{document.getElementById('menuAdmin').innerHTML = data})

    
}

puxarMenu()