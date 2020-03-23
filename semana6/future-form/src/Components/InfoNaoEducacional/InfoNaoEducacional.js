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

class InfoNaoEducacional extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render () {
        return (
            <div>
                <Form>
                    <h3>Etapa 3 - Informações Educacionais</h3>
                    <label>1. Por que não terminou um curso de graduação?</label>
                    <br/>
                    <input type = "text"></input>   

                    <label>2. Você fez algum curso complementar??</label>
                    <br/>
                    <select name= "select">
                        <option>Curso técnico</option>
                        <option>Curso de inglês</option>
                        <option>Não fiz cursos complementares</option>
                    </select>                  
                </Form>
            </div>
        )
    }
} 

export default InfoNaoEducacional