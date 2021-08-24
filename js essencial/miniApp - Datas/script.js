let dataPartida = prompt("Digita a data de partida (formato DD/MM/YYYY)")

// converter data para o moment, transformando a string em data
let conversaoData = moment(dataPartida, "DD/MM/YYYY")

// retorna a data de hoje
let dataHoje = moment()

// calcular diferença data de hoje e data de partida 
let diferencaData = dataHoje - dataPartida

let opcaoEscolhida = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")

if (opcaoEscolhida == "1") {
    let segundos = Math.round(diferencaData / 1000)
    alert(`Tempo de vôo: ${segundos} segundos`)
} else if (opcaoEscolhida == "2") {
    let minutos = Math.round(diferencaData / 1000 / 60)
    alert(`Tempo de vôo: ${minutos} minutos`)

} else if (opcaoEscolhida == "3") {
    let horas = Math.round(diferencaData / 1000 / 3600)
    alert(`Tempo de Vôo: ${horas} horas`)
} else if (opcaoEscolhida == "4") {
    let dias = Math.round(diferencaData / 1000 / 3600 / 24)
    alert(`Tempo de Vôo: ${dias} dias`)
} else {
    alert("Opção inválida")
}