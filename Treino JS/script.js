var andar = document.getElementById('andarilho')
var bnt_direita = document.getElementById('bnt_direita')
var bnt_esquerda = document.getElementById('bnt_esquerda')

const init=()=>{
    andar.style.position = 'relative'
    andar.style.left = '0px'
}

bnt_esquerda.addEventListener('click', ()=>{
    andar.style.position = 'relative'
    andar.style.left = parseInt(andar.style.left) - 10 + "px"
})

bnt_direita.addEventListener('click', ()=>{
    let pos=parseInt(andar.style.left)
    pos += 10
    andar.style.position = 'relative'   
    andar.style.left = `${pos}px`
})


window.onload=init()