import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { login } from "../../actions/data";

const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");

    if (token !== null) {
      alert("Você já está logado!")
      this.props.goToListScreen();
    }
  }

  handleFieldChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();

    this.props.login(this.state.email, this.state.password);
    console.log(this.state);
  };

  render() {
    const { email, password } = this.state;

    return (
      <LoginWrapper onSubmit={this.handleLogin}>
        <TextField
          required
          onChange={this.handleFieldChange}
          name="email"
          type="email"
          label="E-mail"
          value={email}
        />
        <TextField
          required
          onChange={this.handleFieldChange}
          name="password"
          type="password"
          label="Password"
          value={password}
        />
        <Button type="submit">Login</Button>
      </LoginWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password)),
    goToListScreen: () => dispatch(push(routes.trips)),
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
