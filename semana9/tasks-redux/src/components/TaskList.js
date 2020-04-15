import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchTasks, toggleTask, deleteTask } from "../actions/todo";


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

  componentDidMount() {
    this.props.fetchTasks()
  }

  render() {
    return (
      <div>
        {this.props.taskList
          .filter((task) => {
            const filter = this.props.filter;
            if (filter === "pendentes") {
              return task.done === false;
            }
            if (filter === "completas") {
              return task.done === true;
            }
            return true;
          })
          .map((task) => {
            return (
              <P key={task.id} onClick={() => this.props.toggleTask(task.id)}>
                {task.text} - Completa: {String(task.done)}
                <button onClick={() => this.props.deleteTask(task.id)}>
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
    fetchTasks: () => dispatch(fetchTasks()),
    toggleTask: (id) => dispatch(toggleTask(id)),
    deleteTask: (id) => dispatch(deleteTask(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
