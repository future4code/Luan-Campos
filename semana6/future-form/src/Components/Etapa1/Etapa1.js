import React from 'react';
import styled from 'styled-components'

const Form = styled.form `
  display: flex;
  align-items: center;
  justify-content:space-evenly;
  flex-direction:column;
  width: 200px;
  height: 300px;
`

class Etapa1 extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    proximaEtapa = () => {
        
    }

    render() {
        return (
            <div>
            <header><h3>ETAPA 1 - DADOS GERAIS</h3></header>   
            <Form>

            <label>1. Qual o seu nome?</label>
            <br></br>
            <input type = "text"></input>

            <br></br>
            <br></br>

            <label>2. Qual a sua idade?</label>
            <br></br>
            <input type = "number"></input>

            <br></br>
            <br></br>

            <label>3. Qual seu email?</label>
            <br></br>
            <input type = "text"></input>

            <br></br>
            <br></br>

            <label>4. Qual a sua escolaridade?</label>
            <br></br>
            <select name= "select">
                <option value = "1">Ensino médio incompleto</option>
                <option value = "2">Ensino médio completo</option>
                <option value = "3">Ensino superior incompleto</option>
                <option value = "4">Ensino superior completo</option>
            </select>

            </Form>
            </div>
        )   
    }
}

export default Etapa1