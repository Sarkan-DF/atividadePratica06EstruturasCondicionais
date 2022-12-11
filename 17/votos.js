/*
Escreva um algoritmo que armazene o número total de eleitores de
um município, o número de votos brancos, nulos e válidos. Calcular
e escrever o percentual que cada um representa em relação ao
total de eleitores. O algoritmo deve fazer uma validação para que as
porcentagens dos votos armazenados (brancos, nulos e válidos)
respeitem o limite do número total de eleitores, ou seja, garantir que
a soma dos votos brancos, nulos e válidos não seja maior que o
número total de eleitores.
*/

const totalVotos = Number.parseInt(prompt("Digite o numero total de votos: "));
const votosBrancos = Number.parseInt(prompt("Digite o numero de votos branos: "));
const votosNulos = Number.parseInt(prompt("Digite o numero de votos nulos: "));
let porcentagenVotosValidos = 0;
let porcentagenVotosBrancos = 0;
let porcentagenVotosNulos = 0;

let votosValidos = totalVotos - (votosBrancos + votosBrancos)

if (votosValidos < 0) {
  alert("Os votos brancos e nulos somados não pode ser maior que total de votos! Favor executar o programa novamente!");
} else {
  porcentagenVotosValidos = (votosValidos / totalVotos) * 100
  porcentagenVotosBrancos = (votosBrancos / totalVotos) * 100
  porcentagenVotosNulos = (votosNulos / totalVotos) * 100
}

document.write(`A porcentagem de votos validos é ${porcentagenVotosValidos}%.<br/>`)
document.write(`A porcentagem de votos brancos é ${porcentagenVotosBrancos}%.<br/>`)
document.write(`A porcentagem de votos nulos é ${porcentagenVotosNulos}%.`)
