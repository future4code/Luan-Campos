import React from 'react';
import styled from 'styled-components'

const Form = styled.form `
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content:space-evenly;
  width: 200px;
  height: 300px;
`

class InfoEducacional extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render () {
        return (
        <div>
        
        <Form>
        <h3>Etapa 2 - Informações Educacionais</h3>
        <label>1. Qual o curso?</label>
        <br></br>
        <input type = "text"></input>

        <br></br>

        <label>2. Unidade de ensino?</label>
        <br></br>
        <input type = "text"></input>

        </Form>
        </div>
        )
    }
} 

export default InfoEducacional