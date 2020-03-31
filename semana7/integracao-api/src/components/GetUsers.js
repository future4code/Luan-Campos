import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const ContainerUsuarios = styled.div `
  border: 1px solid black;
  width: 500px;
  text-align: center;

  h2 {
      border-bottom: 2px solid black;
  }
`

const Ul = styled.ul `
    float: left;
    list-style-type: none;
    text-align: left;
    width: 80%;

    li {
        border-bottom: 1px solid black;
        border-right: 1px solid black;
        margin-bottom: 10px;
        
    }

    span {
        float: right;
    }
`

class GetUsers extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            usuarios: []
        }
    }

    componentDidMount() {
        this.pegaUsuarios()
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
            const listaUsuarios = resposta.data.result

            this.setState({usuarios: listaUsuarios})
            console.log(this.state.usuarios)
        })
        .catch(error => {
            console.log("Deu ruim ", error);
        })
      }

    render() {
        const renderizaUsuarios = this.state.usuarios.map(usuarios => {
        return <li key = {usuarios.id}> <strong>Nome: </strong>{usuarios.name}</li>
        })

        return (
            <ContainerUsuarios>
                <h2>LISTA DE USUÁRIOS</h2>
                <Ul>
                    {renderizaUsuarios}
                </Ul>
            </ContainerUsuarios>
        )
    }
}

export default GetUsers