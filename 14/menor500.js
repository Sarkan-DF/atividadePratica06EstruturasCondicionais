/*
Leia um número, utilizando WHILE multiplique este número por 3
enquanto a soma seja menor que 500 e no final mostre qual o
último valor
*/


let num = Number.parseInt(prompt('Digite um numero'));

while((num * 3) < 500){
    num = num*3;
}
document.write(num);