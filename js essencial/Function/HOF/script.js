function doubleVelocity(velocity, printer) {
    console.log("Entrei em doubleVelocity")

    let newVelocity = velocity * 2
    printer(newVelocity)
    return newVelocity
}

let printVelocity = (velocity) => {
    console.log(`Nova velocidade: ${velocity} km/s`)
}

let newVelocity = doubleVelocity(60, printVelocity)
console.log(newVelocity)







const minhaFuncao = (funcao) => {
    const frase = "Estou gritando"
    return funcao(frase)
}

const grita = (palavra) => console.log(palavra)


minhaFuncao(grita)