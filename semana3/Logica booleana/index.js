/* 
    1-  a. false
        b. false
        c. true
        d. false
        e. boolean      
*/

/*
    2- a. O array é uma varíavel que pode conter mais de um valor. Ex: let array = ["maca", "laranja", "pera"]
       b. O index inicial é o 0. Ex: array[0]
       c. Usando a propriedade 'length'. Ex: array.length
       d. I.  undefined
          II.  null
          III.  11  
          IV.  3  e  4
          V.  19  e  9
          VI.  3
          VII.  1
*/      

/* EXERCÍCIO 1

const fahrenheitToKelvin = (77 - 32) * 5/9 + 273.15
const celsiusToFahrenheit = (80) * 9/5 + 32
const celsiusToKelvin = 30 + 273.15

console.log("77°F para Kelvin: ", fahrenheitToKelvin)
console.log("80°C para Fahrenheit: ", celsiusToFahrenheit)
console.log("30°C para Fahrenheit e Kelvin: ", celsiusToFahrenheit, celsiusToKelvin)

let valor = prompt("Insira um valor em ºC para ver quanto ele vale em ºF e K")

let valueToFahrenheit = (valor) * 9/5 + 32
let valueToKelvin = valor + 273.15

console.log(valor + "ºC para ºF e K: ", valueToFahrenheit, valueToKelvin)

*/

/* EXERCÍCIO 2
const ask1 = prompt("1. Qual é o seu nome?")
const ask2 = Number(prompt("2. Qual é a sua idade?"))
const ask3 = prompt("3. Qual foi seu jogo favorito na infância?")
const ask4 = prompt("4. Qual foi o chefão mais difícil que você ja enfrentou?")
const ask5 = prompt("5. O que faz te lembrar da sua infância (ex.: um cheiro, um lugar) e por que?")

console.log("1. Qual é o seu nome?")
console.log("Resposta: " + ask1)

console.log("2. Qual é a sua idade?")
console.log("Resposta: ", ask2)

console.log("3. Qual foi seu jogo favorito na infância?")
console.log("Resposta: " + ask3)

console.log("4. Qual foi o chefão mais difícil que você ja enfrentou?")
console.log("Resposta: " + ask4)

console.log("5. O que faz te lembrar da sua infância (ex.: um cheiro, um lugar) e por que?")
console.log("Resposta: " + ask5)
*/

/* EXERCÍCIO 3
const price = 0.05
let kwh = 280

let subTotal = kwh * price
let desconto = subTotal * 0.15
let total = subTotal - desconto

console.log("Subtotal: R$", subTotal)
console.log("Total COM desconto: R$", total)
*/