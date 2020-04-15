import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleTodo } from "../actions/todo";
import { deletaTodo } from "../actions/todo";

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

class TaskList extends React.Component {
  render() {
    return (
      <div>
        {this.props.taskList
          .filter((task) => {
            const filter = this.props.filter;
            if (filter === "pendentes") {
              return task.completa === false;
            }
            if (filter === "completas") {
              return task.completa === true;
            }
            return true;
          })
          .map((task) => {
            return (
              <P key={task.id} onClick={() => this.props.toggleTodo(task.id)}>
                {task.task} - Completa: {String(task.completa)}
                <button onClick={() => this.props.deletaTodo(task.id)}>
                  Deletar
                </button>
              </P>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taskList: state.todos.taskList,
    filter: state.todos.filter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    deletaTodo: (id) => dispatch(deletaTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
