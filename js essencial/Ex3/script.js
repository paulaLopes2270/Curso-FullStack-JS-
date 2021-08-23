let nome = prompt("Digite o seu nome: ")

let velocidade = 0

let velocidadeEscolhida = prompt("A que velocidade você gostaria de acelerar a nave?")

confirm(`confirma a velocidade ${velocidadeEscolhida}?`)

if (velocidadeEscolhida < 0) {
    alert("Nave Está parada.Considere partir e aumentar a velocidade")
} else if (velocidadeEscolhida < 40) {
    alert("Você está devagar, podemos aumentar mais")
} else if ((velocidadeEscolhida >= 40) && (velocidadeEscolhida <= 80)) {
    alert("Parece uma boa velocidade para manter")
} else if ((velocidadeEscolhida >= 80) && (velocidadeEscolhida < 100)) {
    alert("Velocidade Alta. Considere diminuir")
} else {
    alert("Velocidade perigosa. Controle automático forçado")
}

alert(`Piloto: ${nome} \nvelocidade atual: ${velocidadeEscolhida}`)