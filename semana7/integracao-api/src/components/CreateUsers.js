import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const Formulario = styled.div `
  border: 1px solid black;
  width: 250px;
  text-align: center;
`

const Label = styled.label`

`

const Input = styled.input `
  float:right;
  width: 185px;
  margin-right: 10px;
`

const Botao = styled.button `
  margin-top: 10px;
  width: 100%;
`

class CreateUsers extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            inputNaTela: true,
            usuarios: [],
            inputNome: "",
            inputEmail: ""
        }
    }

    onChangeInputNome = event => {
        this.setState({ inputNome: event.target.value });
      };
    
      onChangeInputEmail = event => {
        this.setState({ inputEmail: event.target.value });
      };
    
      onClick = () => {
        this.setState({ inputNaTela: !this.state.inputNaTela })
      }
    
      criaUsuario = () => {
        const body = {
          name: this.state.inputNome,
          email: this.state.inputEmail
        }
    
        axios
        .post("https://us-central1-future-apis.cloudfunctions.net/api/users", 
          body,
            {
            headers: 
              {
              "api-token": "luan-hamilton"
              }
            }
          )
        .then(resposta => {
          console.log(resposta)
        })
        .catch(error => {
          console.log("Deu ruim", error);
        })
      }

    render() {
        return (
            <div>
                {this.state.inputNaTela ? 
                <Formulario>
                <h2>Insira os dados</h2>
                <Label>Name: </Label><Input value= {this.state.inputNome} onChange= {this.onChangeInputNome}/>
                <br/>
                <br/>
                <Label>Email: </Label><Input value= {this.state.inputEmail} onChange= {this.onChangeInputEmail}/>  
                <br/>
                <Botao onClick = {this.criaUsuario}>Enviar</Botao>
                </Formulario>
                : 
                <Formulario>
                <h2>Lista de Usuários</h2>
                <ul>
                    <li>

                    </li>
                </ul>
                </Formulario>
                }
            </div>
        )
    }
}

export default CreateUsers