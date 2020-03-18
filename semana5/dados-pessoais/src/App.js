import React from 'react';
import './App.css';
import TituloSecao from './Components/TituloSecao/TituloSecao';
import BigCard from './Components/BigCard/BigCard';
import SmallCard from './Components/SmallCard/SmallCard';
import ImageButton from './Components/ImageButton/ImageButton';
import iconEmail from './Images/iconEmail.jpg'


function App() {
  return (
    <div className= "container">
        <TituloSecao titulo = {"Dados Pessoais"}/>
        <BigCard titulo = {"Luan C. Nunes"} texto = {"Olá, meu nome é Luan e eu estudo desenvolvimento Web na Future4! Amo quebrar a cabeça programando, a sensação de consertar algo é boa demais!"}/>
        <SmallCard i = {"fas fa-envelope"} conteudo = {"Email: luancnunes04@gmail.com"}/>
        <SmallCard conteudo = {"Endereço: Rua Luis Forner, 40"}/>
        <ImageButton button = {"Ver mais"}/>

        <TituloSecao titulo = {"Experiências Profissionais"}/>
        <BigCard titulo = {"Empresa 1"} />
        <BigCard titulo = {"Empresa 2"} />

        <TituloSecao titulo = {"Minhas redes sociais"}/>
        <ImageButton/>
    </div>
  );
}

export default App;
