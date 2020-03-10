/* EXERCÍCIO 1
    A. Um array vazio
    B. Array[ 0, 1, 0, 1, 2, 3 ]
    C. Array[ 0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5 ]
*/

/* EXERCÍCIO 2
    A. Ele retorna o índice de onde estão os nomes passados como parâmetro. como "Paula" não tem na lista, ele retorna undefined.
    B. Funcionaria. Ele ainda retornaria o índice de onde os elementos estão no array. 
    ex: let arrayDeNomes = [1, 2, 3, 4, 5];

    console.log(funcao(arrayDeNomes, 3));  retorna 2
    console.log(funcao(arrayDeNomes, 2));  retorna 1
    console.log(funcao(arrayDeNomes, 6));  retorna undefined

*/

/* EXERCÍCIO 3
    Ele soma os índices do array no 'resultadoA' e multiplica os índices do array no resultadoB, depois adiciona eles em um novo array.
    'function somaEMultiplica(array)'
*/

/* EXERCÍCIO 4 - A.

function ageCalculator (humanAge)
{
    return humanAge * 7
}

console.log(ageCalculator(4)) // 28

*/

/* EXERCÍCIO 4 - B.

const infos = (name, age, address, student) => 
{
    let isStudent 
    if (student === true) 
    {
        isStudent = "Eu sou " + name + ", tenho " + Number(age) + " anos, moro em " + address + " e sou estudante"
    }
    else 
    {
        isStudent = "Eu sou " + name + ", tenho ", Number(age), " anos, moro em " + address + " e não sou estudante" 
    }
    return isStudent
}

console.log(infos("Luan", 20, "Rua luis forner", true))

*/

/* EXERCÍCIO 5

const century = (year) =>
{
    let cent

    if (year === 1000)
    {
        cent = "X"
    } else if (year <= 1100)
    {
        cent = "XI"
    } else if (year <= 1200)
    {
        cent = "XII"
    } else if (year <= 1300)
    {
        cent = "XIII"
    } else if (year <= 1400)
    {
        cent = "XIV"
    } else if (year <= 1500)
    {
        cent = "XV"
    } else if (year <= 1600)
    {
        cent = "XVI"
    } else if (year <= 1700)
    {
        cent = "XVII"
    } else if (year <= 1800)
    {
        cent = "XVIII"
    } else if (year <= 1900)
    {
        cent = "XIV"
    } else if (year <= 2000)
    {
        cent = "XX"
    } else if (year <= 2100)
    {
        cent = "XXI"
    } else 
    {
        return("Ano fora do alcance do algoritmo")
    }

    return ("O ano " + year + " pertence ao século " + cent)
}

console.log(century(2020))

*/

/* EXERCÍCIOS 6- A, B, C, D.

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

const arrayLength = (array) =>
{
    return array.length
}

console.log(arrayLength(array)) 

const evenOrOdd = (number) =>
{
    if (number % 2 === 0)
    {
        return true
    }
    else
    {
        return false
    }
}

console.log("O número é par? ", evenOrOdd(4)) // true
console.log("O número é par? ", evenOrOdd(5)) // false


const evenQuantity = (array) =>
{
    let quant = 0

    for (let x of array)
    {
        if (evenOrOdd(x))
        {
            quant += 1
        }
    }
    return quant
}

console.log("Quantidade de números pares: ", evenQuantity(array))
*/