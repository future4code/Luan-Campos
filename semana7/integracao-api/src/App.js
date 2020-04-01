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
`

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      mostraOsCampos : true,
    }
  }

  onClickButton = () => {
    this.setState({mostraOsCampos: !this.state.mostraOsCampos})
  }

  render() {
    return (
      <Container>
        <BotaoEsquerda onClick = {this.onClickButton}>{this.state.mostraOsCampos ? "Lista de Usuários" : "Formulário"}</BotaoEsquerda>
        
        {this.state.mostraOsCampos ? <CreateUsers/> : <GetUsers/>}
      </Container>
    )
  }
}

export default App;
