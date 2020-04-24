import React from "react";
import { connect } from "react-redux";
import { replace } from "connected-react-router";
import { routes } from "../Router";
import {
  getTripDetail,
  approveCandidate
} from "../../actions/data";
import styled from "styled-components";
import Button from "@material-ui/core/Button";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(to right bottom, #ea5a6f, #de791e, #fccf3a);
`;

const WrapperDetails = styled.div`
  background-color: whitesmoke;
  border-radius: 10px;
  padding: 10px 20px;
`;

const CandidateDetails = styled.div`
  display:grid; 
  grid-template-columns: 0.2fr 0.7fr;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-bottom: 5px;
`;

class TripDetailsPage extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem("token");

    if (token === null) {
      this.props.goToLoginScreen();
    }
    this.props.getTripDetail(this.props.tripId, localStorage.getItem("token"));
  }

  handleApproveCandidate = (id) => {
    this.props.approveCandidate(
      id,
      this.props.tripId,
      localStorage.getItem("token")
    );

    this.props.getTripDetail(this.props.tripId, localStorage.getItem("token"));
  };

  render() {
    const { tripInfo } = this.props;
    return (
      <Wrapper>
        <WrapperDetails>
          <h3>Detalhes da viagem</h3>
          <p>
            <strong>Nome da viagem:</strong>
            {tripInfo.name}
          </p>
          <p>
            <strong>Planeta: </strong>
            {tripInfo.planet}
          </p>
          <p>
            <strong>Candidatos:</strong>
          </p>
          {(tripInfo.candidates) ? (
            tripInfo.candidates.map((candidate) => {
              return (
                <CandidateDetails key={candidate.id}>
                  <p>Nome: </p><p>{candidate.name}</p>
                  <p>Idade: </p><p>{candidate.age}</p>
                  <p>País: </p><p>{candidate.country}</p>
                  <p>Profissão: </p><p>{candidate.profession}</p>
                  <p>Motivo: </p><p>{candidate.applicationText}</p>
                  <button
                    onClick={() => {
                      this.handleApproveCandidate(candidate.id);
                    }}
                  >
                    Aprovar
                  </button>
                </CandidateDetails>
              );
            })
          ) : (
            <h3>Não há candidatos</h3>
          )}

          <h3>Aprovados</h3>
          {(tripInfo.approved) ? (
            tripInfo.approved.map((approved) => {
              return (
                <CandidateDetails key={approved.id}>
                  <p>Nome: </p><p>{approved.name}</p>
                  <p>Idade: </p><p>{approved.age}</p>
                  <p>País: </p><p>{approved.country}</p>
                  <p>Profissão: </p><p>{approved.profession}</p>
                </CandidateDetails>
              );
            })
          ) : (
            <h3>Nenhum aprovado</h3>
          )}
        </WrapperDetails>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  tripId: state.data.tripId,
  tripInfo: state.data.tripInfo,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getTripDetail: (id, token) => dispatch(getTripDetail(id, token)),
    goToLoginScreen: () => dispatch(replace(routes.login)),
    approveCandidate: (id, tripId, token) =>
      dispatch(approveCandidate(id, tripId, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TripDetailsPage);
