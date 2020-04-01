import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import cross from '../images/cross.svg'

const ContainerUsuarios = styled.div `
  width: 500px;
  text-align: center;

  h2 {
    border-bottom: 1px solid black;
  }
`

const Ul = styled.ul `
    float: left;
    list-style-type: none;
    text-align: left;
    width: 80%;

    li {
        border-bottom: 1px solid black;

        margin-bottom: 10px;
        
    }

    img {
        width: 12px;
        float: right;
        margin: 5px 5px 0 0;
        cursor: pointer;
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
        })
        .catch(error => {
            console.log("Deu ruim ", error);
        })
    }

    deletaUsuario = (id) => {
        axios.delete(`https://us-central1-future-apis.cloudfunctions.net/api/users/${id}`, {
            headers:
                {
                    "api-token": "luan-hamilton"
                }
            }
        )
        .then(resposta => {
            this.pegaUsuarios()
        })
        .catch(error => {
            console.log("Não consegui deletar o usuário", error)
        })
    }

    render() {
        const renderizaUsuarios = this.state.usuarios.map(usuarios => {
        return <li key = {usuarios.id}> <strong>Nome: </strong>{usuarios.name} 
        <img onClick = {() => {if (window.confirm("Deseja realmente deletar o usuário?")) this.deletaUsuario(usuarios.id)}} src = {require("../images/cross.svg")}/>
        </li>
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