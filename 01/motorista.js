// 1. Crie uma variável para ler a idade de um motorista. Caso o
// motorista tenha idade maior ou igual a 18 anos imprime no console
// “Pode dirigir”, caso contrário imprima “Não pode dirigir”.

const idade = Number.parseInt(prompt("Digite sua idade: "))

if (idade >= 18) {
    document.write("Pode dirigir!")
}
else{
    document.write("Não pode dirigir!")
}