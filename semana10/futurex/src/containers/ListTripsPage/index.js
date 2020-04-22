import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";

class ListTripsPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Lista de Viagens</p>
        <button onClick={this.props.goToCreateTripPage}>Criar viagem</button>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToCreateTripPage: () => dispatch(push(routes.createTrip))
  };
};

export default connect(null, mapDispatchToProps)(ListTripsPage);
