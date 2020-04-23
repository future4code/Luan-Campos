import React from "react";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import { routes } from "../Router";
import { getTrips, getTripDetail } from "../../actions/data";
import styled from "styled-components";

const AllBoxes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoBox = styled.div`
  width: 200px;
  height: 100%;
  border: 1px solid black;
  margin-bottom: 10px;
  padding: 10px;
`;

class ListTripsPage extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem("token");

    if (token === null) {
      this.props.goToLoginScreen();
    }
    this.props.getTrips();
  }

  handleIdTrip = (id) => {
    this.props.getTripDetail(id, localStorage.getItem("token"));
    this.props.goToTripsDetailsPage(id)

  };

  render() {
    return (
      <AllBoxes>
        <p>Lista de Viagens</p>
        {this.props.trips &&
          this.props.trips.map((trips) => {
            return (
              <InfoBox key={trips.id}>
                <strong>{trips.name}</strong> <p>{trips.description}</p>{" "}
                <p>
                  <strong>Planeta: </strong>
                  {trips.planet}
                </p>{" "}
                <p>
                  <strong>Duração: </strong>
                  {trips.durationInDays} dias
                </p>{" "}
                <p>
                  <strong>Data de partida: </strong>
                  {trips.date}
                </p>
                <button onClick={() => {this.handleIdTrip(trips.id)}}>Detalhes</button>
              </InfoBox>
            );
          })}
        <button onClick={this.props.goToCreateTripPage}>Criar viagem</button>
      </AllBoxes>
    );
  }
}

const mapStateToProps = (state) => ({
  trips: state.data.trips
});

const mapDispatchToProps = (dispatch) => {
  return {
    getTrips: () => dispatch(getTrips()),
    getTripDetail: (id, token) => dispatch(getTripDetail(id, token)),
    goToCreateTripPage: () => dispatch(push(routes.createTrip)),
    goToLoginScreen: () => dispatch(replace(routes.login)),
    goToTripsDetailsPage: (id) => dispatch(push(routes.tripDetails)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTripsPage);
