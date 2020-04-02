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
    z-index: 1;
    position: relative;
    font-size: inherit;
    font-family: inherit;
    color: white;
    padding: 0.5em 1em;
    outline: none;
    border: none;
    background-color: hsl(236, 32%, 26%);
    

    &:hover {
    cursor: pointer;
    }

    &::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 4px solid hsl(236, 32%, 26%);
    transform-origin: center;
    transform: scale(1);
    }

    &:hover::before {
    transition: all 0.75s ease-in-out;
    transform-origin: center;
    transform: scale(1.75);
    opacity: 0;
    }

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