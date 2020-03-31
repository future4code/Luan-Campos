import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import GetUsers from './GetUsers';

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
  margin-right: 8px;
`

const Botao = styled.button `
  margin-top: 10px;
  width: 100%;
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
            console.log(resposta)
        })
        .catch(error => {
            console.log("Deu errado: ", error)
        })
    }
    
    render() {
        return (
            <Formulario>
                <h2>DADOS USUÁRIO</h2>
                <Label>Nome: </Label>
                <Input value= {this.state.inputNome} onChange = {this.onChangeNome}></Input>
                <br/>
                <br/>
                <Label>Email: </Label>
                <Input value= {this.state.inputEmail} onChange = {this.onChangeEmail}></Input>
                <br/>
                <Botao onClick= {this.criaUsuario}>Enviar</Botao>
            </Formulario>
        )
    }
}

export default CreateUsers