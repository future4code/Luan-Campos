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

class Agradecimento extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render () {
        return (
            <div>
                <Form>
                    <h3>O FORMULÁRIO ACABOU</h3>
                    <p>Muito obrigado por participar! Entraremos em contato!</p>
                </Form>
            </div>
        )
    }
}

export default Agradecimento