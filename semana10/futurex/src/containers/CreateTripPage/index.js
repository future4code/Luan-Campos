import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createNewTrip } from "../../actions/data";
import { replace } from "connected-react-router";
import { routes } from "../Router"

const Wrapper = styled.div``;

const Form = styled.form`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
`;

const today = new Date();
const day = today.getDate()
const month = today.getMonth()
const year = today.getFullYear()

const min = `${year}-0${month}-${day}`

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
    const token = localStorage.getItem("token")

    if (token === null) {
      this.props.goToLoginScreen()
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

    console.log(e.target.value)
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.props.createNewTrip(this.state.form, localStorage.getItem("token"))
    console.log(this.state.form)
  };

  render() { 
    console.log(min)
    return (
      <Form onSubmit={this.handleFormSubmit}>
        {appForm.map((input) => {
          return (
            <Wrapper key={input.name}>
              <label htmlFor={input.name}>{input.label}</label>
              <input
                required
                name={input.name}
                type={input.type}
                min={input.min}
                defaultValue= {input.defaultValue}
                pattern={input.pattern}
                title={input.title}
                // value={this.state.form[input.name] || ""}
                onChange={this.handleInputChange}
              />
            </Wrapper>
          );
        })}

        <select required onChange={this.handleSelectedPlanet}>
          <option>
            -- Selecione o planeta --
          </option>
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
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    createNewTrip: (body, token) => dispatch(createNewTrip(body, token)),
    goToLoginScreen: () => dispatch(replace(routes.login))
  });

export default connect (null, mapDispatchToProps) (CreateTripPage);
