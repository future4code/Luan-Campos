import React from 'react';
import styled from 'styled-components'
import axios from 'axios';

const ContainerDex = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

`
const DivImagem = styled.div `
    height: 225px;
    width: 225px;
    border: 2px solid red;

    img {
        height: 225px;
    }
`

const DivInfo = styled.div `
    width: 225px;
    height: 140px;
    border: 1px solid black;

`


class Pokemons extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        imagemPokemon: undefined,
        tipo: []
    }
  }

  infoPokemon = (event) => {
      if(event.target.value !== ""){
        axios.get(`https://pokeapi.co/api/v2/pokemon/${event.target.value}`)
        .then(res => {

          this.setState({imagemPokemon: res.data.sprites.front_default})
          this.setState({tipo: res.data.types})
          console.log(res.data)

        })
    } else{
        this.setState({imagemPokemon: undefined})
        this.setState({tipo: []})
        
    }
  }

  render() {
       
    return (
      <ContainerDex>
        <select onChange= {this.infoPokemon}>
          <option value ="">Nenhum</option>
          {this.props.pokemons.map(pokemon => {
            return <option value = {pokemon.name} >{pokemon.name}</option>
          })}
        </select>

        <DivImagem>
          {this.state.imagemPokemon && (
              <img alt= {"pokemon"} src= {this.state.imagemPokemon}/>
          )}
        </DivImagem>

        <DivInfo>
            <strong>Tipo:</strong> 
            {this.state.tipo && (this.state.tipo.map(tipo => {
                return <span> {tipo.type.name} </span>      
            }))}
        </DivInfo>
      </ContainerDex>
    );
  }
}

export default Pokemons;