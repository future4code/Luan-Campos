import comprarCarta from './naoMexer.js'

let cartaUser1 = comprarCarta();
let cartaUser2 = comprarCarta();

let cartaPc1 = comprarCarta();
let cartaPc2 = comprarCarta();

let soma1 = cartaUser1.valor + cartaUser2.valor 
let soma2 = cartaPc1.valor + cartaPc2.valor

if(confirm("Quer iniciar uma nova rodada?"))
{
   
   console.log("Usuário - cartas: " + cartaUser1.texto + " " + cartaUser2.texto + " pontuação: " + soma1)
   console.log("Computador - cartas: " + cartaPc1.texto + " " + cartaPc2.texto + " pontuação: " + soma2)

   if (soma1 > soma2)
   {
      console.log("O usuário venceu!!!")
   }
   else if (soma1 < soma2)
   {
      console.log("O computador venceu!!!")
   }
   else
   {
      console.log("Deu empate :O")
   }

} 
else 
{
   console.log("O jogo acabou :(")
   alert("O jogo acabou :(")
}