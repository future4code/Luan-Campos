// Interpretação de código - 1

// O código pede para o usuário inserir a cotação do dolar para verificar quanto que fica em REAIS;
// Depois ele cria uma variável que recebe a função + o valor para verificar;
// O valor impresso vai ser o valor em dolar * a cotação (Ex.: 100 * 5 = 500 reais)

// Interpretação de código - 2.

// É uma função para escolher um tipo de investimento e um valor; Cada tipo de investimento vai retornar um valor diferente no final;
// Ele recebe o tipo e o valor, depois multiplica por um valor fixo e retorna o novo valor em uma variável.
// console.log(novoMontante) = 150 * 1.1 = 165
// console.log(segundoMontante) = opção inválida = chama o alert do default

// Interpretação de código - 3.

// O código passa pelo array 'numeros' vendo se é par ou ímpar;
// Se for par, adiciona o valor no 'array1'; Se for ímpar, no 'array2';
// Os console.log : 1 - a quantidade de números do array 'numeros' (14);
// 2 - a quantidade de números do 'array1' (6)
// 3 - a quantidade de números do 'array2' (8)

// Interpretação de código - 4. 

// Desse eu não tenho certeza;
// O for percorre o array de numeros, e se o numero em questão for < que infinito, a variável recebe o valor do número (eu acho).
// Já se for >, numero2 recebe o valor de número.
// console.log(numero1) Esse eu não tenho certeza, mas acho que vai ser o menor número do array, -10. (Não tenho certeza se a variável que tem 'Infinity' fica com valor infinito pra sempre)
// console.log(numero2) Esse vai retornar o maior número, 1590.

// Lógica de programação - 1

// for, for of, forEach

// const array = [10, 20, 30, 40, 50, 1160, 30, 4343, 1000]

// for(let i = 0; i < array.length; i++)
// {
//     console.log(array[i])
// }]

// for(numeros of array)
// {
//     console.log(numeros)
// }

// array.forEach(element => {
//     console.log(element)
// });

// Lógica de programação - 2. 

// A. False
// B. False
// C. True
// D. True
// E. True

// Lógica de programação - 3.
// Não vai funcionar, vai ficar em loop infinito daquele jeito.

// const quantidadeDeNumerosPares = 3
// let i = 0 
// while(i <= quantidadeDeNumerosPares * 2 - 1) {
//     if (i % 2 === 0)
//     {
//         console.log(i)
//         i += 1
//     }
//     else
//     {
//         i +=1
//     }  
// }

// Lógica de programação - 4.

// function defineTriangulo (a, b, c){
//     let resultado = ""
//     if (a === b && a === c && b === c)
//     {
//         resultado = "É equilátero"
//     }
//     else if (a === b || a === c || b === c)
//     {
//         resultado = "É isósceles"
//     } else 
//     {
//         resultado = "É escaleno"
//     }

//     return resultado
// }

// console.log(defineTriangulo(30, 30, 30))

// Lógica de programação - 5.

// const num1 = 120
// const num2 = 100

// let maior = 0
// let diferenca1 = num1 - num2

// if (num1 > num2)
// {
//     maior = num1
//     console.log("O maior é: "+ maior)
// } else {
//     maior = num2
//     console.log("O maior é: "+ maior)
// }

// if (num1 % num2 !== 0) 
// {
//     console.log(num1 + " não é divisível por " + num2)
// } else {
//     console.log(num1 + " é divisível por " + num2)
// }

// if(num2 % num1 !== 0)
// {
//     console.log(num2 + " não é divisível por " + num1)
// } else {
//     console.log(num2 + " é divisível por " + num2)
// }

// if (diferenca1 < 0)
// {
//     diferenca1 *= -1

// }

// console.log("A diferença entre eles é: " + diferenca1)

// Exercícios de funções - 1.

// const arrayNums = [1, 3, 54, 67, 32, 44, 99, 100, 200]

// function retornaArray(array) {

//     function ordenaNumero(a,b){
//         return a-b
//     }

//     array.sort(ordenaNumero)

//     let segundoMaior = array[array.length - 2]
//     let segundoMenor = array[1]

//     console.log("Segundo maior: ", segundoMaior)
//     console.log("Segundo menor: ", segundoMenor)
//
// }

// retornaArray(arrayNums)

// Exercícios de funções - 2. 

// var alerta = function () {
//     return alert("Hello Future4!")
// }

// alerta()

// Exercício de Objetos - 1.

        //NÃO ESQUECER

// Exercício de Objetos - 2.

// function criaRetangulo(lado1, lado2) {
//     let arrayObj = {largura: lado1, altura: lado2, perimetro: 2 * (lado1 + lado2),  area: lado1 * lado2}
    
//     return arrayObj
// }

// console.log(criaRetangulo(10, 20))

// Exercício de Objetos - 3.

// const meuFilme = {
//     titulo: "Harry Potter e as Relíquias da Morte",
//     ano: 2010,
//     diretor: "David Yates" ,
//     atores: ["Daniel Radcliffe", " Rupert Grint", " Emma Watson"]
 
// }
// console.log("Venha assistir ao filme " + meuFilme.titulo + ", de " + meuFilme.ano + ", dirigido por " + meuFilme.diretor + " e estrelado por " + meuFilme.atores)

// Exercício de Objetos - 4.

// const dados = {
//     nome: "Luan",
//     idade: 20,
//     email: "luancnunes04@gmail.com",
//     endereco: "Rua Luis Forner"
// }

// function anonimizarPessoa(infoPessoa) {
//     infoPessoa.nome = "ANÔNIMO"

//     return infoPessoa
// }

// console.log(anonimizarPessoa(dados))

// Exercícios de Funções de array - 1. A.

const pessoas = [
    {nome: "Pedro", idade: 20},
    {nome: "João", idade: 10},
    {nome: "Paula", idade: 12},
    {nome: "Artur", idade: 89}
]

function retornaAdultos(array) {
    const maiorDeidade = array.filter(
        (maior) => 
        {
            return maior.idade >= 20
        }
    )
    return maiorDeidade
}

console.log(retornaAdultos(pessoas))

// Exercícios de Funções de array - 1. B.
  
function returnChild (array) {
    const menorDeIdade = array.filter(
        (menor) =>
        {
            return menor.idade < 20
        }
    )
    return menorDeIdade
}

console.log(returnChild(pessoas))