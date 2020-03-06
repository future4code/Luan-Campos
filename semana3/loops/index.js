/* EXERCÍCIO 1
    Ele está adicionando o valor de sum + i na variável sum (sum = sum + i) enquanto i é menor que 15.
    O resultado será 105.
*/

/* EXERCÍCIO 2
    A. Ele adiciona um valor no final do array.
    B. [10, 15, 25, 30]
    C. Seriam [ 12, 15, 18, 21, 27, 30 ] e [ 12 ], porque ele só adiciona valores na novaLista se o valor percorrido por múltiplo do número da variável 'numero'.
*/

/* EXERCÍCIO 3 A.
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = array[0]
let menor = array[0]

for (let i = 0; i < array.length; i++)
{
    if(array[i] > maior)
    {
        maior = array[i]
    }

    if(array[i] < menor)
    {
        menor = array[i]
    }
}

console.log("O maior número é ", maior, " e o menor número é ", menor)
*/

/* 3 B.
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novoArray = []

for (let i = 0; i < array.length; i++)
{
    novoArray.push(array[i] / 10)
}

console.log(novoArray)
*/

/* 3 C.
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novoArray = []

for (let i = 0; i < array.length; i++) 
{
    if (array[i] % 2 === 0)
    {
        novoArray.push(array[i])
    }
}

console.log(novoArray)
*/

/* 3 D.
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novoArray = []

for (let i= 0; i < array.length; i++)
{
    novoArray.push("O elemento do index " + i + " é: " + array[i])
}

console.log(novoArray)
*/

/* DESAFIO 1
    O programava vai criar 4 linhas, e em cada linha vai ter a quantidade de zeros correspondente a sua linha.
    Resultado: 
    0
    00
    000
    0000
*/

/* DESAFIOS 2 E 3

alert("Vamos jogar! Dessa vez eu sou seu inimigo, o computador!!!! MuaHAHAHAHAAHAHAH-")

const num = Math.floor(Math.random() * 100) + 1;     
let chute = Number(prompt("Caham, eu me empolguei. Meu número pode ser qualquer um de 1 a 100. Chute: "))
let erros = 0

while (chute !== num)
{
    if (chute < num)
    {
        erros += 1
        console.log("O número chutado foi: ", chute)
        console.log("HAHAHA! O número é maior!")
        chute = Number(prompt("Tente outro número: "))
    }

    else if (chute > num)
    {
        erros += 1
        console.log("O número chutado foi: ", chute)
        console.log("Tadinho, tá pensando muito alto, o número é menor!")
        chute = Number(prompt("Tente outro número: "))
    }
}

console.log("Maldição, você acertou... O número era: ", num)
console.log("O número de tentativas foi: ", erros)

/* 
    A alteração que fiz foi bem fácil. Acho que se me deixasse procurar a função por conta própria teria sido um pouco mais complicado (e melhor).
    Acredito que esse jeito já é o modo mais fácil de se fazer isso.
    Obs.: Usei o alert só pra fazer uma brincadeirinha, foi mal!!
*/

