import React from 'react';
import styled from 'styled-components';

const P = styled.p `
  border-bottom: 1px solid purple;
  background-color: whitesmoke;
  padding: 10px 0 5px 10px;
  font-style: italic;
  margin: 3px 0 3px;

  :hover {
    cursor: pointer;
  }

`

const Container =  styled.div `
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

const Title = styled.h1 `
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 90px;
  color: purple;

`

const TaskContainer = styled.div `
  width: 700px;
  height: 100px;
  display: flex;
  flex-direction:column;
  font-size: 20px;

`

const InputTask = styled.input `
  width: 681px;
  color: purple;
  font-size: inherit;
  font-family: inherit;
  background-color: whitesmoke;
  padding: 0.35em 0.45em;
  border: 1px solid transparent;
  font-style: italic;

  ::placeholder {
    color: purple;
    font-style: italic;
  }
  
`

const Footer = styled.footer `
  display: flex;
  justify-content: space-between;
`

const Button = styled.button `
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: purple;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: whitesmoke;
  font-style: italic;


  :hover {
    cursor: pointer;
  }

  ::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 4px solid whitesmoke;
    transform-origin: center;
    transform: scale(1);
  }

  :hover::before {
    transition: all 0.50s ease-in-out;
    transform-origin: center;
    transform: scale(1.50);
    opacity: 0;
  }

`

function App() {
  return (
    <Container>
      <Title>ToDo</Title>
      <TaskContainer>
        <InputTask placeholder = "O que você tem que fazer?"/>
        <P>Lavar a louça</P>
        <P>Arrumar o quarto</P>
        <P>Fazer a janta</P>
        <Footer>
          <Button>Marcar como completa</Button>
          <Button>Marcar como incompleta</Button>
        </Footer>
      </TaskContainer>
      
    </Container>
  );
}

export default App;