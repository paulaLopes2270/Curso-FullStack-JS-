let name = prompt("Qual é o nome da nave?")
let dobra = prompt("Deseja entrar em dobra espacial?\n1- Sim\n2- Não")
let totalDobra = 1


if (dobra == "1") {
    let novaDobra = prompt("Primeira dobra confirmada! Deseja realizar mais uma dobra?\n1- Sim\n2- Não")
    while (novaDobra == "1") {
        novaDobra = prompt("Deseja realizar mais uma dobra?\n1- Sim\n2- Não")

        totalDobra++
    }
    alert(`Nome da nave ${name}\nNúmero de dobras espaciais realizadas: ${totalDobra}`)
} else {
    alert(`Nome da nave ${name}\nNenhuma dobra espacial foi realizada`)
}