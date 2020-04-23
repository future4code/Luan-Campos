import React from "react";
import { connect } from "react-redux";
import { replace } from "connected-react-router";
import { routes } from "../Router";

class TripDetailsPage extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem("token");

    if (token === null) {
      this.props.goToLoginScreen();
    }
  }

  render() {
    return <div>Detalhes dos candidatos da viagem
      <button onClick={()=> {console.log(this.props.tripInfo)}}>Vai caraio</button>
    </div>;
  }
}

const mapStateToProps = (state) => ({
  tripInfo: state.data.tripId,
});

const mapDispatchToProps = (dispatch) => {
  return {
    goToLoginScreen: () => dispatch(replace(routes.login)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TripDetailsPage);
