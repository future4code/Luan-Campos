import React from "react";
import styled from "styled-components"
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";

const Wrapper = styled.div `
  display:flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(to right bottom, #ea5a6f, #de791e, #fccf3a);

`

const SecondWrapper = styled.div `
  display:flex;
  flex-direction: column;
  width: 400px;
  text-align: center;

  p {
    font-family: 'Prompt', sans-serif;
    font-size: 19px;
    margin-bottom: 65px;
  }

  h1 {
    font-family: 'Prompt', sans-serif;
    font-size: 42px;
    line-height: 1px;
  }

  Button {
    font-family: 'Prompt', sans-serif;
    width: 150px;
    height: 50px;
  }

  div {
    display:flex;
    justify-content: space-between;
    padding: 5px;
  }
`


class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Wrapper>
        <SecondWrapper>
          <h1>Viaje com a gente</h1>
          <p>As melhores viagens você encontra aqui</p>
          <div>
            <Button variant = "contained" color= "primary" onClick={this.props.goToLoginScreen}>Login</Button>
            <Button variant = "contained" color= "primary" onClick={this.props.goToFormScreen}>Inscrever-se</Button>
          </div>
        </SecondWrapper>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToFormScreen: () => dispatch(push(routes.form)),
    goToLoginScreen: () => dispatch(push(routes.login))
  };
};

export default connect(null, mapDispatchToProps)(HomePage);
