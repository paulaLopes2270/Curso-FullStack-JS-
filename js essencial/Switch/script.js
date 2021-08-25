let distanceInly = prompt("Digite a distância em anos-luz");

let chosenOption = prompt(
    "Para qual unidade deseja converter?\n1- Parse(pc)\n2- Unidade Astronômica (au)\n3- Quilômetros (km)\n\n(Digite o número da opção desejada)"
);

let chosenUnity;
let convertedDistance;

switch (chosenOption) {
    case "1":
        chosenUnity = "Parsec";
        convertedDistance = distanceInly * 0.306601;
        break;
    case "2":
        chosenUnity = "Unidade Astronômica";
        convertedDistance = distanceInly * 63241.1;
        break;
    case "3":
        chosenUnity = "Quilômetros";
        convertedDistance = distanceInly * 9.5 * Math.pow(10, 12);
        break;
    default:
        chosenUnity = "Unidade não identificada";
        convertedDistance = "Conversão fora do escopo";
}

alert(`Distância em Anos-luz ${distanceInly}\n ${chosenUnity}: ${convertedDistance}`)