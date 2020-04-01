import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const Formulario = styled.div `
  border: 1px solid black;
  width: 300px;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-gap: 15px;
`

const Label = styled.label`

`

const Input = styled.input `

`

const Botao = styled.button `
  width: 100px;
  background-color: blue;
  color: white;
  height: 45px;

`

class CreateUsers extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            inputNome: "",
            inputEmail: ""
        }
    }

    onChangeNome = (event) => {
        this.setState({inputNome: event.target.value})
    }

    onChangeEmail = (event) => {
        this.setState({inputEmail: event.target.value})
    }

    criaUsuario = () => {
        const body = {
            name: this.state.inputNome,
            email: this.state.inputEmail
        }

        axios
        .post("https://us-central1-future-apis.cloudfunctions.net/api/users",
        body, {
            headers: 
                {
                "api-token": "luan-hamilton"
                }
            }
        )
        .then(resposta => {
            alert("Usuário cadastrado com sucesso")
            console.log(resposta)
        })
        .catch(error => {
            alert("Erro ao cadastrar usuário")
            console.log("Deu errado: ", error)
        })
    }
    
    render() {
        return (
            <Formulario>
                <h2>CADASTRO</h2>
                <Label>Nome: </Label>
                <Input value= {this.state.inputNome} onChange = {this.onChangeNome}></Input>
                <Label>Email: </Label>
                <Input value= {this.state.inputEmail} onChange = {this.onChangeEmail}></Input>
                <Botao onClick= {this.criaUsuario}>Enviar</Botao>
            </Formulario>
        )
    }
}

export default CreateUsers