import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

import { CountryDropdown } from "react-country-region-selector";
import { connect } from "react-redux";
import { getTrips, applyToTrip } from "../../actions/data";

const Section = styled.section``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(to right bottom, #ea5a6f, #de791e, #fccf3a);
`;

const Form = styled.form`
  background-color: whitesmoke;
  text-align: center;
  width: 450px;
  height: 450px;
  border-radius: 10px;

  Input {
    width: 250px;
  }

  label {
    display: block;
    text-align: center;
    margin-top: 10px;
  }

  select {
    margin-top: 10px;
    width: 250px;
  }

  Button {
    margin: 20px auto 0;
    display: block;
    width: 250px;
  }
`;

const appForm = [
  {
    name: "name",
    type: "text",
    label: "Nome ",
    pattern: "[A-Za-z çÇ]{3,}",
    title: "Mínimo 3 caracteres",
  },
  { name: "age", type: "number", min: 18, label: "Idade " },
  {
    name: "applicationText",
    type: "text",
    label: "Motivos ",
    pattern: "[A-Za-z çÇ]{30,}",
    title: "Mínimo 30 caracteres",
  },
  {
    name: "profession",
    type: "text",
    label: "Profissão ",
    pattern: "[A-Za-z çÇ]{10,}",
    title: "Mínimo 10 caracteres",
  },
];

class ApplicationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        country: "",
      },
      tripId: "",
    };
  }

  componentDidMount = () => {
    this.props.getAllTrips();
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      form: { ...this.state.form, [name]: value },
    });
  };

  handleSelectCountry = (val) => {
    this.setState({
      form: { ...this.state.form, country: val },
    });
  };

  handleSelectTrip = (e) => {
    this.setState({
      tripId: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.applyToTrip(this.state.form, this.state.tripId);

    this.setState({ 
      form: {},
      tripId: ""
    })
  };

  render() {
    return (
      <Wrapper>
        <Form onSubmit={this.handleFormSubmit}>
          <h1>Formulário de inscrição</h1>
          {appForm.map((input) => {
            return (
              <Section key={input.name}>
                <label htmlFor={input.name}>{input.label}</label>
                <Input
                  required
                  name={input.name}
                  type={input.type}
                  inputProps={{ min: input.min,
                  pattern: input.pattern,
                  title: input.title
                  }}
                  value={this.state.form[input.name] || ""}
                  onChange={this.handleInputChange}
                />
              </Section>
            );
          })}

          <CountryDropdown
            value={this.state.form.country}
            onChange={(val) => this.handleSelectCountry(val)}
            // Não entendi essa função anônima que passa o parâmetro pro método
          />

          <select required onChange={this.handleSelectTrip}>
            <option disabled>Nenhum</option>
            {this.props.trips.map((trip) => {
              return (
                <option key={trip.id} value={trip.id}>
                  {trip.name} - {trip.planet}
                </option>
              );
            })}
          </select>

          <Button variant="contained" type="submit">
            Enviar
          </Button>
        </Form>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  trips: state.data.trips,
});

const mapDispatchToProps = (dispatch) => ({
  getAllTrips: () => dispatch(getTrips()),
  applyToTrip: (form, id) => dispatch(applyToTrip(form, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm);
