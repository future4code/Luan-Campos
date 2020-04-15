import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { criaTodo } from "../actions/todo";

const InputTodo = styled.input`
  width: 555px;
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
`;

const Button = styled.button`
  z-index: 1;
  width: 120px;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: purple;
  padding: 0.3em 1em;
  outline: none;
  border: none;
  background-color: whitesmoke;
  font-style: italic;
  margin-left: 5px;

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
    border: 2px solid whitesmoke;
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

class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: "",
    };
  }

  onChangeInput = (e) => {
    this.setState({ inputText: e.target.value });
  };

  onClickAdicionar = () => {
    this.props.criaTodo(this.state.inputText);
    this.setState({inputText: ""})
  };

  render() {
    return (
      <form>
        <InputTodo
          value={this.state.inputText}
          onChange={this.onChangeInput}
          placeholder="O que você tem que fazer?"
        />
        <Button type="button" onClick={this.onClickAdicionar}>
          Adicionar tarefa
        </Button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    criaTodo: (todo) => dispatch(criaTodo(todo)) 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
