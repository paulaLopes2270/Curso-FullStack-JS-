let nome = prompt("Digite o seu nome: ")

let velocidade = 0

let velocidadeEscolhida = prompt("A que velocidade você gostaria de acelerar a nave?")

let confirmVelocidade = confirm(`confirma a velocidade ${velocidadeEscolhida}?`)

if (confirmVelocidade) {
    velocidade = velocidadeEscolhida
}

if (velocidade <= 0) {
    alert("Nave Está parada.Considere partir e aumentar a velocidade")
} else if (velocidade < 40) {
    alert("Você está devagar, podemos aumentar mais")
} else if ((velocidade >= 40) && (velocidade <= 80)) {
    alert("Parece uma boa velocidade para manter")
} else if ((velocidade >= 80) && (velocidade < 100)) {
    alert("Velocidade Alta. Considere diminuir")
} else {
    alert("Velocidade perigosa. Controle automático forçado")
}

alert(`Piloto: ${nome} \nvelocidade atual: ${velocidade}`)