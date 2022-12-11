// 11. Utilizando Switch, faça um programa que pergunte em que turno
// você estuda. Peça para digitar “M” para matutino ou “V” para
// vespertino ou “N” para noturno. Mostre um alerta com a mensagem
// “Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
// conforme o caso.

const turno = prompt("Favor digitar “m” para matutino ou “v” para vespertino ou “n” para noturno")

switch (turno){
    case "m":
        mensagem = "Bom dia!";
        break;

    case "v":
        mensagem = "Boa tarde!";
        break;
    
    case "n":
        mensagem = "Boa noite!"
        break;

    default:
        mensagem = "Valor inválido!"

}

alert(mensagem);