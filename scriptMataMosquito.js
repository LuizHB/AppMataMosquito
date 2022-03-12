var altura = 0
var largura = 0

//função para verificar o tamanho da tela para criar as posições randomicas das imagens
function ajustaTamanhoTela() {
	altura = window.innerHeight
	largura = window.innerWidth
	console.log(largura,altura)
}

ajustaTamanhoTela()

//Math.floor para arredondar o valor da posição
var posX = Math.floor(Math.random() * largura) -90
var posY = Math.floor(Math.random() * altura) -90
var posX1 = Math.floor(Math.random() * largura) -90
var posY1 = Math.floor(Math.random() * altura) -90
var posX2 = Math.floor(Math.random() * largura) -90
var posY2 = Math.floor(Math.random() * altura) -90
//retirando 90 px para não sair do limite da página
//operador ternário para não possuir posição 0 e sumir da página

posX = posX <0 ? 0 : posX
posY = posY <0 ? 0 : posY
posX1 = posX1 <0 ? 0 : posX1
posY1 = posY1 <0 ? 0 : posY1
posX2 = posX2 <0 ? 0 : posX2
posY2 = posY2 <0 ? 0 : posY2


console.log(posX,posY)

//criando elemento html

var mosquito1 =document.createElement('img')
var mosquito2 =document.createElement('img')
var mosquito3 =document.createElement('img')

mosquito1.src = 'img/mosquito.png'
mosquito2.src = 'img/mosquito2.png'
mosquito3.src = 'img/mosquito3.png'
//acessando a classe da imagem
mosquito1.className = 'mosquito'
mosquito2.className = 'mosquito'
mosquito3.className = 'mosquito'
//acessando a posição
mosquito1.style.left = posX + 'px'
mosquito1.style.top = posY + 'px'
mosquito1.style.position = 'absolute'

mosquito2.style.left = posX1 + 'px'
mosquito2.style.top = posY1 + 'px'
mosquito2.style.position = 'absolute'

mosquito3.style.left = posX2 + 'px'
mosquito3.style.top = posY2 + 'px'
mosquito3.style.position = 'absolute'

document.body.appendChild(mosquito1)
document.body.appendChild(mosquito2)
document.body.appendChild(mosquito3)
