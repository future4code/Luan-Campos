import comprarCarta from './naoMexer.js'

if (confirm("Quer iniciar uma nova rodada?"))
{
   let cartasUser = [comprarCarta(), comprarCarta()]
   let cartasPc = [comprarCarta(), comprarCarta()]

   let somaUser = cartasUser[0].valor + cartasUser[1].valor
   let somaPc = cartasPc[0].valor + cartasPc[1].valor

   while(cartasUser[0].valor === 11 && cartasUser[1].valor === 11 || cartasPc[0].valor === 11 && cartasPc[1].valor === 11)
   {
      cartasUser = [comprarCarta(), comprarCarta()]
      cartasPc = [comprarCarta(), comprarCarta()]

      somaUser = cartasUser[0].valor + cartasUser[1].valor
      somaPc = cartasPc[0].valor + cartasPc[1].valor
   }

   if (somaUser > somaPc)
   {
      console.log("Usuário - cartas: " + cartasUser[0].texto + " " + cartasUser[1].texto + " - Pontuação: " + somaUser + "\n" + "Computador - cartas: " + cartasPc[0].texto + " " + cartasPc[1].texto + " - Pontuação: " + somaPc + "\n" + "O usuário venceu!!!")
      alert("Usuário - cartas: " + cartasUser[0].texto + " " + cartasUser[1].texto + " - Pontuação: " + somaUser +  "\n" + "Computador - cartas: " + cartasPc[0].texto + " " + cartasPc[1].texto + " - Pontuação: " + somaPc + "\n" + "O usuário venceu!!!")
   }
   else if (somaUser < somaPc)
   {
      console.log("Usuário - cartas: " + cartasUser[0].texto + " " + cartasUser[1].texto + " - Pontuação: " + somaUser +  "\n" + "Computador - cartas: " + cartasPc[0].texto + " " + cartasPc[1].texto + " - Pontuação: " + somaPc + "\n" + "O computador venceu!!!")
      alert("Usuário - cartas: " + cartasUser[0].texto + " " + cartasUser[1].texto + " - Pontuação: " + somaUser +  "\n" + "Computador - cartas: " + cartasPc[0].texto + " " + cartasPc[1].texto + " - Pontuação: " + somaPc + "\n" + "O computador venceu!!!")
   }
   else
   {
      console.log("Usuário - cartas: " + cartasUser[0].texto + " " + cartasUser[1].texto + " - Pontuação: " + somaUser +  "\n" + "Computador - cartas: " + cartasPc[0].texto + " " + cartasPc[1].texto + " - Pontuação: " + somaPc + "\n" + "Deu empate :(")
      alert("Usuário - cartas: " + cartasUser[0].texto + " " + cartasUser[1].texto + " - Pontuação: " + somaUser +  "\n" + "Computador - cartas: " + cartasPc[0].texto + " " + cartasPc[1].texto + " - Pontuação: " + somaPc + "\n" + "Deu empate :(")
   }
}
else
{
   alert("Adeus :(")
   console.log("Adeus :(")
}