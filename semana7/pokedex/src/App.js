import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import Pokemons from './Components/Pokemons';

const ContainerApp = styled.div `

`

const ContainerDex = styled.div `
  height: 400px;
  width: 250px;
  border: 2px solid black;
  margin: 0 auto;
`

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      pokemons: []
    }
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then(res => {
      this.setState({pokemons: res.data.results})
    })
  }

  render() {

    return (
      <ContainerApp>
        <ContainerDex>
          <Pokemons pokemons = {this.state.pokemons}/>
        </ContainerDex>
      </ContainerApp>

    );
  }
}

export default App;