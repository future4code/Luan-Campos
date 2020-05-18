import React from "react";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import { routes } from "../Router";
import { getTrips, getTripId } from "../../actions/data";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right bottom, #ea5a6f, #de791e, #fccf3a);
  height: 100vh;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
  }
`;

const InfoBox = styled.li`
  list-style: none;
  width: 200px;
  height: 100%;
  margin-bottom: 10px;
  padding: 10px;
  background-color: whitesmoke;
  border-radius: 10px;

  button {
    margin: 0 auto;
  }
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
    this.props.getTripId(id);
    this.props.goToTripsDetailsPage();
  };

  render() {
    return (
      <Wrapper>
        <h1>Lista de Viagens</h1>
        <ul>
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
                  <button
                    onClick={() => {
                      this.handleIdTrip(trips.id);
                    }}
                  >
                    Detalhes
                  </button>
                </InfoBox>
              );
            })}
        </ul>
        <button onClick={this.props.goToCreateTripPage}>Criar viagem</button>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  trips: state.data.trips,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getTrips: () => dispatch(getTrips()),
    getTripId: (id) => dispatch(getTripId(id)),
    goToCreateTripPage: () => dispatch(push(routes.createTrip)),
    goToLoginScreen: () => dispatch(replace(routes.login)),
    goToTripsDetailsPage: () => dispatch(push(routes.tripDetails)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTripsPage);
