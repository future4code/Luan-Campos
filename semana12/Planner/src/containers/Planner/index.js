import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from "../../actions/todo";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
`;

const Form = styled.form``;

const WrapperWeek = styled.div`
  width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 0 auto;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;

    li {
      list-style: none;
      width: 100px;
      border: 1px solid blue;
      margin-top: 10px;
    }
  }
`;

const dias = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
  "Domingo",
];

class Planner extends React.Component {
  state = {
    inputValue: "",
    day: "Segunda",
  };

  componentDidMount() {
    this.props.getTasks();
  }

  handleInput = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSelect = (e) => {
    this.setState({ day: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.createTask(this.state.inputValue, this.state.day);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <Wrapper>
        <Form onSubmit= {this.handleFormSubmit}>
          <input
            required
            value={this.state.inputValue}
            onChange={this.handleInput}
          />
          <select
            value={this.state.day}
            onChange={this.handleSelect}
          >
            {dias.map((dia) => {
              return (
                <option key={dia} value={dia}>
                  {dia}
                </option>
              );
            })}
          </select>
          <button type= "submit">Criar</button>
        </Form>

        <WrapperWeek>
          {dias.map((dia) => {
            return (
              <ul key={dia}>
                {dia}
                {this.props.allTasks &&
                  this.props.allTasks.map((task) => {
                    if (task.day === dia) {
                      return <li key={task.id}>{task.text}</li>;
                    }
                  })}
              </ul>
            );
          })}
        </WrapperWeek>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  allTasks: state.todos.allTasks,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Planner);
