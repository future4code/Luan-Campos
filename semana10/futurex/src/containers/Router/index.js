import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
import ApplicationForm from "../ApplicationForm";
import ListTripsPage from "../ListTripsPage";
import CreateTripPage from "../CreateTripPage";
import TripDetailsPage from "../TripDetailsPage";

export const routes = {
  root: "/",
  login: "/login",
  form: "/application-form",
  trips: "/trips/list",
  createTrip: "/trips/create",
  tripDetails: "/trips/details"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={HomePage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.form} component={ApplicationForm} />
        <Route exact path={routes.trips} component={ListTripsPage} />
        <Route exact path={routes.createTrip} component={CreateTripPage} />
        <Route exact path={routes.tripDetails} component={TripDetailsPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
