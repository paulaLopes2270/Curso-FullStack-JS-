let nameNave = prompt("Qual é o nome da espaçonave?")

let caracter = prompt("Qual caracter você deseja substituir?")

let novoCaracter = prompt("Por qual caracter você deseja substituir?")

let novoName = ""

for (let i = 0; i < nameNave.length; i++) {
    if (nameNave[i] == caracter) {
        novoName += novoCaracter
    } else {
        novoName += nameNave[i]
    }
}
alert(`O antigo nome da nave era: ${nameNave}\nO novo nome da nave é: ${novoName}`)