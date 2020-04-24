import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { login } from "../../actions/data";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(to right bottom, #ea5a6f, #de791e, #fccf3a);
`;
const LoginWrapper = styled.form`
  background-color: whitesmoke;
  width: 400px;
  height: 400px;
  gap: 40px;
  place-content: center;
  justify-items: center;
  display: grid;
  border-radius: 10px;

  Button {
    width: 200px;
  }
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
    // const token = localStorage.getItem("token");

    // if (token !== null) {
    //   alert("Você já está logado!")
    //   this.props.goToListScreen();
    // }
  }

  handleFieldChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();

    this.props.login(this.state.email, this.state.password);
  };

  render() {
    const { email, password } = this.state;

    return (
      <Wrapper>
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
      </Wrapper>
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
