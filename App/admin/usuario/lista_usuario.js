fetch('/App/components/menu/menu_admin/menu_admin.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('menu_admin').innerHTML = data;
            });