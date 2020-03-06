import comprarCarta from './naoMexer.js'

let cartasUser = [comprarCarta(), comprarCarta()]
let cartasPc = [comprarCarta(), comprarCarta()]

let somaUser = cartasUser[0].valor + cartasUser[1].valor
let somaPc = cartasPc[0].valor + cartasPc[1].valor

console.log(somaUser)
console.log(somaPc)

if (confirm("Quer iniciar uma nova rodada?"))
{
   while(cartasUser[0].valor === 11 && cartasUser[1].valor === 11 || cartasPc[0].valor === 11 && cartasPc[1].valor === 11)
   {
      cartasUser = [comprarCarta(), comprarCarta()]
      cartasPc = [comprarCarta(), comprarCarta()]

      somaUser = cartasUser[0].valor + cartasUser[1].valor
      somaPc = cartasPc[0].valor + cartasPc[1].valor
   }

   if(confirm("Suas cartas são " + cartasUser[0].texto + " " + cartasUser[1].texto + ". A carta revelada do computador é " + cartasPc[0].texto + ". Deseja tirar outra carta?"))
   {
      cartasUser.push(comprarCarta())
      let novaSomaUser = somaUser + cartasUser[cartasUser.length - 1].valor
      
      if (novaSomaUser === 21)
      {
         alert("Suas cartas são " + cartasUser[0].texto + " " + cartasUser[1].texto +  " " + cartasUser[2].texto + ". A carta revelada do computador é " + cartasPc[0].texto + ". \n"
         + "Sua pontuação deu: " + novaSomaUser +" . Você ganhou!")

      }
      else if (novaSomaUser > 21)
      {
         alert("Suas cartas são " + cartasUser[0].texto + " " + cartasUser[1].texto +  " " + cartasUser[2].texto + ". A carta revelada do computador é " + cartasPc[0].texto + " " + cartasPc[1].texto  + ". \n" 
         + "Sua pontuação deu: " + novaSomaUser + " . A pontuação do computador foi: " + somaPc + " . O computador ganhou!")
      }
      else
      {
         if(confirm("Suas cartas são " + cartasUser[0].texto + " " + cartasUser[1].texto + " " + cartasUser[2].texto + ". A carta revelada do computador é " + cartasPc[0].texto + ". Deseja tirar outra carta?"))
         {
            cartasUser.push(comprarCarta())
            novaSomaUser += cartasUser[cartasUser.length - 1].valor

            if (novaSomaUser === 21)
            {
               alert("Suas cartas são " + cartasUser[0].texto + " " + cartasUser[1].texto +  " " + cartasUser[2].texto + " " + cartasUser[3].texto + ". A carta revelada do computador é " + cartasPc[0].texto + ". \n"
               + "Sua pontuação deu: " + novaSomaUser +" . Você ganhou!")

            }
            else if (novaSomaUser > 21)
            {
               alert("Suas cartas são " + cartasUser[0].texto + " " + cartasUser[1].texto +  " " + cartasUser[2].texto + " " + cartasUser[3].texto + ". A carta revelada do computador é " + cartasPc[0].texto + " " + cartasPc[1].texto  + ". \n" 
               + "Sua pontuação deu: " + novaSomaUser + " . A pontuação do computador foi: " + somaPc + " . O computador ganhou!")
            }
            else
            {
               if(confirm("Suas cartas são " + cartasUser[0].texto + " " + cartasUser[1].texto + " " + cartasUser[2].texto + " " + cartasUser[3].texto + ". A carta revelada do computador é " + cartasPc[0].texto + ". Deseja tirar outra carta?"))
               {
                  cartasUser.push(comprarCarta())
                  novaSomaUser += cartasUser[cartasUser.length - 1].valor
      
                  if (novaSomaUser === 21)
                  {
                     alert("Suas cartas são " + cartasUser[0].texto + " " + cartasUser[1].texto +  " " + cartasUser[2].texto + " " + cartasUser[3].texto + " " + cartasUser[4].texto + ". A carta revelada do computador é " + cartasPc[0].texto + ". \n"
                     + "Sua pontuação deu: " + novaSomaUser +" . Você ganhou!")
      
                  }
                  else if (novaSomaUser > 21)
                  {
                     alert("Suas cartas são " + cartasUser[0].texto + " " + cartasUser[1].texto +  " " + cartasUser[2].texto + " " + cartasUser[3].texto + " " + cartasUser[4].texto + ". A carta revelada do computador é " + cartasPc[0].texto + " " + cartasPc[1].texto  + ". \n" 
                     + "Sua pontuação deu: " + novaSomaUser + " . A pontuação do computador foi: " + somaPc + " . O computador ganhou!")
                  }
                  else
                  {
                     if(confirm("Suas cartas são " + cartasUser[0].texto + " " + cartasUser[1].texto + " " + cartasUser[2].texto + " " + cartasUser[3].texto + " " + cartasUser[4].texto + ". A carta revelada do computador é " + cartasPc[0].texto + ". Deseja tirar outra carta?"))
                     {
                        cartasUser.push(comprarCarta())
                        novaSomaUser += cartasUser[cartasUser.length - 1].valor
            
                        if (novaSomaUser === 21)
                        {
                           alert("Suas cartas são " + cartasUser[0].texto + " " + cartasUser[1].texto +  " " + cartasUser[2].texto + " " + cartasUser[3].texto + " " + cartasUser[4].texto + " " + cartasUser[5].texto + ". A carta revelada do computador é " + cartasPc[0].texto + ". \n"
                           + "Sua pontuação deu: " + novaSomaUser +" . Você ganhou!")
            
                        }
                        else if (novaSomaUser > 21)
                        {
                           alert("Suas cartas são " + cartasUser[0].texto + " " + cartasUser[1].texto +  " " + cartasUser[2].texto + " " + cartasUser[3].texto + " " + cartasUser[4].texto + " " + cartasUser[5].texto + ". A carta revelada do computador é " + cartasPc[0].texto + " " + cartasPc[1].texto  + ". \n" 
                           + "Sua pontuação deu: " + novaSomaUser + " . A pontuação do computador foi: " + somaPc + " . O computador ganhou!")
                        }
                        else
                        {
                           if(confirm("Suas cartas são " + cartasUser[0].texto + " " + cartasUser[1].texto + " " + cartasUser[2].texto + " " + cartasUser[3].texto + " " + cartasUser[4].texto + " " + cartasUser[5].texto + ". A carta revelada do computador é " + cartasPc[0].texto + ". Deseja tirar outra carta?"))
                           {
                              cartasUser.push(comprarCarta())
                              novaSomaUser += cartasUser[cartasUser.length - 1].valor
                  
                              if (novaSomaUser === 21)
                              {
                                 alert("Suas cartas são " + cartasUser[0].texto + " " + cartasUser[1].texto +  " " + cartasUser[2].texto + " " + cartasUser[3].texto + " " + cartasUser[4].texto + " " + cartasUser[5].texto + " " + cartasUser[6].texto + ". A carta revelada do computador é " + cartasPc[0].texto + ". \n"
                                 + "Sua pontuação deu: " + novaSomaUser +" . Você ganhou!")
                  
                              }
                              else if (novaSomaUser > 21)
                              {
                                 alert("Suas cartas são " + cartasUser[0].texto + " " + cartasUser[1].texto +  " " + cartasUser[2].texto + " " + cartasUser[3].texto + " " + cartasUser[4].texto + " " + cartasUser[5].texto + " " + cartasUser[6].texto + ". A carta revelada do computador é " + cartasPc[0].texto + " " + cartasPc[1].texto  + ". \n" 
                                 + "Sua pontuação deu: " + novaSomaUser + " . A pontuação do computador foi: " + somaPc + " . O computador ganhou!")
                              }
                           }
                        }
                     }
                  }
               }
            }
         }
      }
   }
   else
   {
      
      if(confirm({

      }
   }
}

// Percebi que isso não ia acabar tão cedo, ia ter mais if's dentro de if's do que eu esperava.