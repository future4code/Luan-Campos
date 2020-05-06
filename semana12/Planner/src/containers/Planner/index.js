import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from "../../actions/todo";
import { Wrapper, Form, WrapperWeek, dias} from "./styles"

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
