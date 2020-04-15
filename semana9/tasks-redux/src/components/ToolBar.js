import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { completeAllTodo, deleteAllDone, setFilter, completeAllTasks} from "../actions/todo";

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Button = styled.button`
  z-index: 1;
  width: 130px;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: purple;
  padding: 0.3em 1em;
  outline: none;
  border: none;
  background-color: whitesmoke;
  font-style: italic;
  margin-top: 5px;

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

class ToolBar extends React.Component {
  render() {
    return (
      <Footer>
        <Button onClick={this.props.completeAllTodo}>
          Marcar todas como completas
        </Button>
        
        <Button onClick={() => this.props.setFilter('todas')}>Todas</Button>
        <Button onClick={() => this.props.setFilter('pendentes')}>Pendentes</Button>
        <Button onClick={() => this.props.setFilter('completas')}>Completas</Button>
        <Button onClick={this.props.deleteAllDone}>
          Remover completas
        </Button>
      </Footer>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    completeAllTodo: () => dispatch(completeAllTodo()),
    deleteAllDone: () => dispatch(deleteAllDone()),
    setFilter: (filter) => dispatch(setFilter(filter)),
  };
};

export default connect(null, mapDispatchToProps)(ToolBar);
