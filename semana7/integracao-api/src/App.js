import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import CreateUsers from './components/CreateUsers';

const Container = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`

const BotaoEsquerda = styled.button `
  width: 150px;
  left: 10px;
  position: absolute;
`

class App extends React.Component {
  constructor(props){
    super(props)
    
  }

  componentDidMount() {
    this.pegaUsuarios();
  }

  pegaUsuarios = () => {
    axios.get("https://us-central1-future-apis.cloudfunctions.net/api/users", 
      {
        headers: 
          {
            "api-token": "luan-hamilton"
          }
        }
     )
    .then(resposta => {
      console.log(resposta.data.result)
    })
    .catch(error => {
      console.log("Deu ruim ", error);
    })
  }

  render() {

    return (
      <Container>
        <BotaoEsquerda onClick = {this.onClick}>Lista de Usuários</BotaoEsquerda>
        <CreateUsers/>
      </Container>
    )
  }
}

export default App;
