async function puxarMenu(){
    await fetch('http://127.0.0.1:5501/App/components/menu/menu_colaborador/menu_colaborador.html').then(response => response.text()).then(data =>{document.getElementById('menuColaborador').innerHTML = data})
    const flecha = document.getElementById('flecha')
const flechaCima = document.getElementById('flechaCima')
const perfilMenu = document.getElementById('perfilMenu')
const dropMenu = document.getElementById("dropMenu")

flecha.addEventListener('click',()=>{
    flecha.className = "flecha displayOff"
    flechaCima.className = "flechaCima displayOn"
    dropMenu.className = "dropMenu DisplayOn"

})

flechaCima.addEventListener("click",()=>{
    flechaCima.className = "flechaCima displayOff"
    flecha.className = "flecha displayOn"
    dropMenu.className = "dropMenu displayOff"
    
})
}

puxarMenu()

