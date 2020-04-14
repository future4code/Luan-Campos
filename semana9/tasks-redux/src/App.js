import React from "react";
import styled from "styled-components";
import { criaTodo } from "./actions/todo"

const P = styled.p`
  border-bottom: 1px solid whitesmoke;
  background-color: whitesmoke;
  padding: 10px 0 5px 10px;
  font-style: italic;
  margin: 3px 0 3px;
  font-size: 18px;

  :hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 90px;
  color: purple;
`;

const TaskContainer = styled.div`
  width: 700px;
  height: 100px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

const InputTodo = styled.input`
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

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  z-index: 1;
  width: 200px;
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
    content: "";
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
    transition: all 0.5s ease-in-out;
    transform-origin: center;
    transform: scale(1.5);
    opacity: 0;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      tasks: [
        {
          id: 1,
          task: "Tarefa 1 - teste",
          completa: false
        }
      ],
      valorInput: ""
    }
  }

  onChangeInput = (e) => {
    this.setState({valorInput: e.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      task: this.state.valorInput,
      completa: false
    }

    const novasTarefas = [...this.state.tasks, novaTarefa]
    this.setState({tasks: novasTarefas})

    this.setState({valorInput: ""})
  }

  render() {
    return (
      <Container>
        <Title>ToDo</Title>
        <TaskContainer>
          <InputTodo value = {this.state.valorInput} onChange = {this.onChangeInput} placeholder="O que você tem que fazer?"/>

          {this.state.tasks.map(task => {
            return <P key = {task.id}>{task.task}</P>
          })}

          <Footer>
            <Button onClick= {this.criaTarefa}>Adicionar tarefa</Button>
            <Button>Marcar todas como completas</Button>
            <Button>Marcar todas como incompletas</Button>
          </Footer>
        </TaskContainer>
      </Container>
    );
  }
}

export default App;
