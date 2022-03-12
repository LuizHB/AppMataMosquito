var altura = 0
var largura = 0
var vidas = 1
var tempo = 5

//função para verificar o tamanho da tela para criar as posições randomicas das imagens

function ajustaTamanhoTela() {
	altura = window.innerHeight
	largura = window.innerWidth
}

ajustaTamanhoTela()

//criando cronometro

var cronometro = setInterval(function(){
	tempo -=1
	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosquito)
	//	window.location.href = 'youWin.html'
	}else{
	document.getElementById('cronometro').innerHTML = tempo
	}
}, 1000)


//criando posição randomica

function posRandom(){

	//remover o mosquito anterior (caso exista)
	if (document.getElementById('mosquito1')) {
		document.getElementById('mosquito1').remove()

		if(vidas > 3){
			window.location.href = 'gameOver.html'
		}else{
			document.getElementById('v' + vidas).src =	'img/coracao_vazio.png'
			vidas++
		}
	}
	

	//Math.floor para arredondar o valor da posição para inteiro

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
//	posX1 = posX1 <0 ? 0 : posX1
//	posY1 = posY1 <0 ? 0 : posY1
//	posX2 = posX2 <0 ? 0 : posX2
//	posY2 = posY2 <0 ? 0 : posY2

	//criando elemento html

	var mosquito1 =document.createElement('img')
//	var mosquito2 =document.createElement('img')
//	var mosquito3 =document.createElement('img')

	mosquito1.src = 'img/mosquito.png'
//	mosquito2.src = 'img/mosquito2.png'
//	mosquito3.src = 'img/mosquito3.png'

	mosquito1.id = 'mosquito1'
//	mosquito2.id = 'mosquito2'
//	mosquito3.id = 'mosquito3'

	//acessando a classe da imagem
	mosquito1.className = tamanhoRandom() + ' ' + ladoRandom() + ' ' + rotacaoRandom()
//	mosquito2.className = tamanhoRandom() + ' ' + ladoRandom()
//	mosquito3.className = tamanhoRandom() + ' ' + ladoRandom() + ' ' + rotacaoRandom()
	//acessando a posição
	mosquito1.style.left = posX + 'px'
	mosquito1.style.top = posY + 'px'
	mosquito1.style.position = 'absolute'

//	mosquito2.style.left = posX1 + 'px'
//	mosquito2.style.top = posY1 + 'px'
//	mosquito2.style.position = 'absolute'

//	mosquito3.style.left = posX2 + 'px'
//	mosquito3.style.top = posY2 + 'px'
//	mosquito3.style.position = 'absolute'

	//remoção de elemento por clique
	mosquito1.onclick = function(){
		this.remove()
	}
//	mosquito2.onclick = function(){
//		this.remove()
//	}
//	mosquito3.onclick = function(){
//		this.remove()
//	}

	//adicionando elementos ao body
	document.body.appendChild(mosquito1)
//	document.body.appendChild(mosquito2)
//	document.body.appendChild(mosquito3)

}

//criando tamanho aleatório
function tamanhoRandom(){
	var tamanho = Math.floor(Math.random()*3)

	switch(tamanho){
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
	}
}

//criando lado aleatorio

function ladoRandom(){
	var lado = Math.floor(Math.random()*2)

	switch(lado){
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
	}
}

//função de rotação aleatoria

function rotacaoRandom(){
	var rotacao = Math.floor(Math.random()*4)

	switch(rotacao){
		case 0:
			return 'rotacaoA'
		case 1:
			return 'rotacaoB'
		case 2:
			return 'rotacaoC'
		case 3:
			return 'rotacaoD'
	}
}

//determinar o ciclo de tempo para os elementos mosquitos

var criaMosquito = setInterval(function(){
	posRandom()
}, 2000)

