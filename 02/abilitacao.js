// 2. Para o mesmo exercício acima insira mais uma variável a
// condicional, além de saber se o motorista tem 18 anos ou mais,
// temos que saber também se ele é habilitado para dirigir. Caso ele
// tenha idade maior ou igual a 18 anos e possua habilitação, insira no
// html “Pode dirigir” caso contrário imprima “Não pode dirigir”.

const idade = Number.parseInt(prompt("Digite sua idade: "));

if (idade >= 18) {
    const habilitado = prompt("Você é habilitado? 's' para Sim ou 'n' para Não: ");
    habilitado.toLowerCase();
    if (habilitado === "s"){
        document.write("Pode dirigir!")
    }else {
        document.write("Não pode dirigir!")
    }
}
else{
    document.write("Não pode dirigir!")
}