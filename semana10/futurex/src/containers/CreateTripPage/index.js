import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createNewTrip } from "../../actions/data";
import { replace } from "connected-react-router";
import { routes } from "../Router";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(to right bottom, #ea5a6f, #de791e, #fccf3a);
`;

const WrapperInput = styled.div``;

const Form = styled.form`
  background-color: whitesmoke;
  text-align: center;
  width: 450px;
  height: 450px;
  border-radius: 10px;

  input {
    width: 250px;
    margin-bottom: 20px;
  }

  label {
    display: block;
    text-align: center;
  }

  select {
    width: 250px;
  }

  button {
    margin: 20px auto 0;
    display: block;
    width: 250px;
  }
`;

const today = new Date();
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();

const min = `${year}-0${month}-${day}`;

const planets = [
  "Júpiter",
  "Marte",
  "Mercúrio",
  "Netuno",
  "Plutão",
  "Saturno",
  "Terra",
  "Urano",
  "Vênus",
];

const appForm = [
  {
    name: "name",
    type: "text",
    label: "Nome da viagem ",
    pattern: "[A-Za-z çÇ]{5,}",
    title: "Mínimo 5 caracteres",
  },
  {
    name: "description",
    type: "text",
    label: "Descrição da viagem ",
    pattern: "[A-Za-z çÇ]{30,}",
    title: "Mínimo 30 caracteres",
  },
  {
    name: "date",
    type: "date",
    title: "Deve ser uma data no futuro",
    min: min,
    defaultValue: min,
    label: "Data de partida ",
  },
  {
    name: "durationInDays",
    type: "number",
    min: 50,
    label: "Duração da viagem ",
    title: "Deve durar no mínimo 50 dias",
  },
];

class CreateTripPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        planet: "",
      },
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");

    if (token === null) {
      this.props.goToLoginScreen();
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      form: { ...this.state.form, [name]: value },
    });
  };

  handleSelectedPlanet = (e) => {
    this.setState({
      form: { ...this.state.form, planet: e.target.value },
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.props.createNewTrip(this.state.form, localStorage.getItem("token"));
  };

  render() {
    return (
      <Wrapper>
        <Form onSubmit={this.handleFormSubmit}>
          <h1>Criação de viagens</h1>
          {appForm.map((input) => {
            return (
              <WrapperInput key={input.name}>
                <label htmlFor={input.name}>{input.label}</label>
                <input
                  required
                  name={input.name}
                  type={input.type}
                  inputProps={{
                    min: input.min,
                    pattern: input.pattern,
                    title: input.title,
                  }}
                  defaultValue={input.defaultValue}
                  onChange={this.handleInputChange}
                />
              </WrapperInput>
            );
          })}

          <select required onChange={this.handleSelectedPlanet}>
            <option>-- Selecione o planeta --</option>
            {planets.map((planet) => {
              return (
                <option value={planet} key={planet}>
                  {planet}
                </option>
              );
            })}
          </select>

          <button type="submit">Cadastrar</button>
        </Form>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createNewTrip: (body, token) => dispatch(createNewTrip(body, token)),
  goToLoginScreen: () => dispatch(replace(routes.login)),
});

export default connect(null, mapDispatchToProps)(CreateTripPage);
