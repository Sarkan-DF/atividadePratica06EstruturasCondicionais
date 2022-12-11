// 18. Uma loja de eletrodomésticos estabeleceu as seguintes
// modalidades de pagamento para a venda de suas mercadorias:

// Escreva um algoritmo que armazene o preço de tabela e o número
// de vezes em que o pagamento será feito. Calcule o valor de cada
// parcela e o preço total da compra e imprima no console.

let valorTabelaProduto = 0;
let numeroParcelas = 0;
let valorFinalProduto = 0;
let mensagem = "";

valorTabelaProduto = Number.parseFloat(prompt("Digite o valor base do produto: "));
numeroParcelas = Number.parseInt(prompt("Digite o numero de parcelas: "));

if ( numeroParcelas === 1) {
  valorTabelaProduto -= (valorTabelaProduto * 0.025);
  mensagem = `O valor final do produto é ${valorTabelaProduto}`;
} else if (numeroParcelas >= 2 && numeroParcelas <= 5) {
  mensagem = `O valor final do produto é ${valorTabelaProduto}`;
} else if (numeroParcelas >= 6 && numeroParcelas <= 10) {
  valorTabelaProduto += (valorTabelaProduto * 0.06);
  mensagem = `O valor final do produto é ${valorTabelaProduto}`;
} else {
  valorTabelaProduto += (valorTabelaProduto * 0.13);
  mensagem = `O valor final do produto é ${valorTabelaProduto}`;
}


console.log(mensagem);