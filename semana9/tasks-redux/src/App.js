import React from "react";
import styled from "styled-components";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ToolBar from "./components/ToolBar";

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



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      
    }
  }

  render() {
    return (
      <Container>
        <Title>ToDo</Title>
        <TaskContainer>
          <TaskForm/>

          <TaskList/>

          <ToolBar/>
        </TaskContainer>
      </Container>
    );
  }
}

export default App;
