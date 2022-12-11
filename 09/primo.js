/*Informe um valor a uma variável e imprima no console se o número
é primo.*/

const isPrime = (num) => {
    for (let i = 2; i < num; i++)
      if (num % i === 0) {
        return false;
      }
    return num > 1;
  };

let num = Number.parseInt(prompt("Digite o numero que deseja verificar se é primo: "))
let = numPrimo = 0;
numPrimo = isPrime(num)

if (numPrimo == false) {
    mensagem = "Não é primo!"
} else {
    mensagem = "É primo!"
}

console.log(mensagem)