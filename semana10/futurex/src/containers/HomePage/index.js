import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Home Page</p>
        <button onClick={this.props.goToLoginScreen}>Login</button>
        <button onClick={this.props.goToFormScreen}>Inscrever-se</button>
      </div>
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
