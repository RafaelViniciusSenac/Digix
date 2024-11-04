async function puxarMenu(){
    await fetch('../menu_colaborador/menu_colaborador.html').then(response => response.text()).then(data =>{document.getElementById('menuColaborador').innerHTML = data})
    const flecha = document.getElementById('flecha')
const flechaCima = document.getElementById('flechaCima')
const perfilMenu = document.getElementById('perfilMenu')

flecha.addEventListener('click',()=>{
    flecha.className = "flecha displayOff"
    flechaCima.className = "flechaCima displayOn"
   

})

flechaCima.addEventListener("click",()=>{
    flechaCima.className = "flechaCima displayOff"
    flecha.className = "flecha displayOn"
    
})
}

puxarMenu()

