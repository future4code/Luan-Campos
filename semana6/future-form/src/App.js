import React from 'react';
import styled from 'styled-components'
import Etapa1 from './Components/Etapa1/Etapa1'
import InfoEducacional from './Components/InfoEducacional/InfoEducacional';
import InfoNaoEducacional from './Components/InfoNaoEducacional/InfoNaoEducacional';
import Agradecimento from './Components/Agradecimento/Agradecimento';

const Container = styled.div `
  display: flex;
  display-content: center;
  flex-direction: column;
  align-items:center;
  border: 1px solid black;
  width: 400px;
  height: 500px;
  margin: 10px auto;
`

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectEtapa: 0,
    }
  }

  clickChange = () => {
    const proximaEtapa = this.state.selectEtapa + 1

    this.setState ({
      selectEtapa : proximaEtapa
    })
  }

  render(){

    let etapa;

    switch (this.state.selectEtapa) {
      case 0:
        etapa = <Etapa1 />;
        break;

      case 1:
        etapa = <InfoEducacional/>
        break;

      case 2: 
        etapa = <InfoNaoEducacional/> 
        break;
            
      default: 
        etapa = null;
    }

    return (
      <Container>
        {etapa}
        {this.state.selectEtapa < 3 ? <button onClick ={this.clickChange}>Próxima Etapa</button> : <Agradecimento/>}
      </Container>
    );
  }
}

export default App;
