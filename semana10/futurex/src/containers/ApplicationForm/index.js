import React from "react";
import styled from "styled-components";
import { CountryDropdown } from "react-country-region-selector";
import { connect } from "react-redux";
import { getTrips, applyToTrip } from "../../actions/data";

const Wrapper = styled.div `

`

const Form = styled.form`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
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
        country: ""
      },
      tripId: ""
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
    console.log(e.target.value);
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.props.applyToTrip(this.state.form, this.state.tripId)
  };

  render() {
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
                pattern={input.pattern}
                title={input.title}
                value={this.state.form[input.name] || ""}
                onChange={this.handleInputChange}
              />
            </Wrapper>
          );
        })}

        <CountryDropdown
          value={this.state.form.country}
          onChange={(val) => this.handleSelectCountry(val)}
          // Não entendi essa função anônima que passa o parâmetro pro método
        />

        <select required onChange={this.handleSelectTrip}>
          <option value="nenhum">Nenhum</option>
          {this.props.trips.map((trip) => {
            return (
              <option key={trip.id} value={trip.id}>
                {trip.name} - {trip.planet}
              </option>
            );
          })}
        </select>

        <button type="submit">
          Enviar
        </button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  trips: state.data.trips,
});

const mapDispatchToProps = (dispatch) => ({
  getAllTrips: () => dispatch(getTrips()),
  applyToTrip: (form, id) => dispatch(applyToTrip(form, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm);
