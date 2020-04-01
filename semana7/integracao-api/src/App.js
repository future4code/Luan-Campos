import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import CreateUsers from './components/CreateUsers';
import GetUsers from './components/GetUsers'

const Container = styled.div `
  display: grid;
  justify-content: center;
  align-items: center;
  height: 500px;
`

const BotaoEsquerda = styled.button `
  width: 150px;
  left: 10px;
  position: absolute;
  z-index: 1;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  transition: color 0.4s ease-in-out;

::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: #3cefff;
  transform-origin: center;
  transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
  transition: transform 0.45s ease-in-out;
}

:hover {
  cursor: pointer;
  color: #161616;
}

:hover::before {
  transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
}
`

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      telaCadastro : true,
    }
  }

  onClickButton = () => {
    this.setState({telaCadastro: !this.state.telaCadastro})
  }

  render() {
    return (
      <Container>
        <BotaoEsquerda onClick = {this.onClickButton}>{this.state.telaCadastro ? "Lista de Usuários" : "Formulário"}</BotaoEsquerda>
        
        {this.state.telaCadastro ? <CreateUsers/> : <GetUsers/>}
      </Container>
    )
  }
}

export default App;
