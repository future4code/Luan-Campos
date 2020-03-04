/* EXERCÍCIO 1
    O código pede pro usuário inserir um número e confere se o resto dele é igual a zero.
    Imprime "passou no teste" se o número for PAR.
    Imprime "não passou no teste" se o número for ÍMPAR.
*/

/* EXERCÍCIO 2
    A. O código serve pra mostrar o preço da fruta informada pelo usuário.
    B. "O preço da fruta Maçã" é R$2.25".
    C. Eu pagaria R$24.75.
    D. O preço da seria R$5. Sem o break, o switch iria pro próximo case que contém um break.
*/

/* EXERCÍCIO 3
    Vai aparecer um erro, porque o console.log está chamando uma variável que NÃO é global, ela foi definida dentro de um if.
    Pra fazer funcionar teria quedeclarar a variável ANTES do if (no escopo global).
*/

/* EXERCÍCIO 4
const number1 = Number(prompt("Coloque o primeiro número:"))
const number2 = Number(prompt("Coloque o segundo número:"))
const number3 = Number(prompt("Coloque o terceiro número:"))


if ((number1 > number2) && (number2 > number3))
{
    console.log("Ordem decrescente: ", number1, ",", number2, ",", number3)
} 
else if ((number1 > number3) && (number3 > number2))
{
    console.log("Ordem decrescente: ", number1, ",", number3, ",", number2)
}
else if ((number2 > number1) && (number1 > number3))
{
    console.log("Ordem decrescente: ", number2, ",", number1, ",", number3)
}
else if ((number2 > number3) && (number3 > number1))
{
    console.log("Ordem decrescente: ", number2, ",", number3, ",", number1)
}
else if ((number3 > number1) && (number1 > number2))
{
    console.log("Ordem decrescente: ", number3, ",", number1, ",", number2)
}
else if ((number3 > number2) && (number2 > number1))
{
    console.log("Ordem decrescente: ", number3, ",", number2, ",", number1)
}
else if ((number1 === number2) && (number2 === number3))
{
    console.log("SEM ORDEM CRESCENTE, NÚMEROS IGUAIS! (COLOQUE NÚMEROS DIFERENTES): ", number3, ",", number2, ",", number1)
}
*/

/* EXERCÍCIO 5
let vertebrados = prompt("O animal é vertebrado? (s/n)")

if (vertebrados === "s")
{
    let pelos = prompt("O animal tem pelos? (s/n)")
    if (pelos === "s")
    {
        let racional = prompt("O animal é racional?(s/n)")
        if (racional === "s")
        {   
            console.log("É um ser humano.")
        }
        else
        {
            console.log("É um mamífero.")
        }
    }
    else
    {
        let penas = prompt("O animal possui penas?(s/n)")
        if (penas === "s")
        {
            console.log("É uma ave.")
        }
        else
        {
            let terrestre = prompt("O animal vive na terra?(s/n)")
            if (terrestre === "s")
            {
                let anfibio = prompt("Ele passa uma parte da vida em ambiente aquático?(s/n)")
                if (anfibio === "s" )
                {
                    console.log("É um anfíbio.")
                }
                else
                {
                    console.log("É um réptil.")
                }
            }
            else
            {
                console.log("É um peixe.")
            }
        }
    }
}
else 
{
    console.log("É invertebrado.")
}
*/