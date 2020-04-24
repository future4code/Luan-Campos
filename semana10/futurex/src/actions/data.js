import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

export const getAllTrips = (trips) => {
  return {
    type: "GET_ALL_TRIPS",
    payload: {
      trips,
    },
  };
};

export const getTripInfo = (infos) => {
  return {
    type: "GET_TRIP_INFO",
    payload: {
      infos,
    },
  };
};

export const getTripId = (id) => {
  return {
    type: "GET_TRIP_ID",
    payload: {
      id,
    },
  };
};

export const getTrips = () => async (dispatch, getState) => {
  const response = await axios.get(
    "https://us-central1-missao-newton.cloudfunctions.net/futureX/luanzinho/trips"
  );

  dispatch(getAllTrips(response.data.trips));
};

export const createNewTrip = (body, token) => async (dispatch, getState) => {
  try {
    const response = await axios.post(
      `https://us-central1-missao-newton.cloudfunctions.net/futureX/luanzinho/trips`,
      body,
      {
        headers: {
          auth: token,
        },
      }
    );
    console.log("Foi caralho!!");
  } catch (error) {
    console.error(error);
  }
};

export const applyToTrip = (body, id) => async (dispatch, getState) => {
  const response = await axios.post(
    `https://us-central1-missao-newton.cloudfunctions.net/futureX/luanzinho/trips/${id}/apply`,
    body
  );

  dispatch(getTrips());
  console.log("Foi caralho");
};

export const login = (email, password) => async (dispatch, getState) => {
  const body = {
    email,
    password,
  };
  try {
    const response = await axios.post(
      `https://us-central1-missao-newton.cloudfunctions.net/futureX/luanzinho/login`,
      body
    );
    localStorage.setItem("token", response.data.token);
    dispatch(push(routes.trips));
  } catch (error) {
    alert("Falha no login, tente novamente");
    console.error(error);
  }
};

export const getTripDetail = (id, token) => async (dispatch, getState) => {
  const response = await axios.get(
    `https://us-central1-missao-newton.cloudfunctions.net/futureX/luanzinho/trip/${id}`,
    {
      headers: {
        auth: token,
      },
    }
  );

  dispatch(getTripInfo(response.data.trip));
  console.log(response.data.trip);
};

export const approveCandidate = (candidateId, tripId, token) => async (
  dispatch,
  getState
) => {
  const body = {
    approve: true,
  };
  const response = await axios.put(
    `https://us-central1-missao-newton.cloudfunctions.net/futureX/luanzinho/trips/${tripId}/candidates/${candidateId}/decide`,
    body,
    {
      headers: {
        auth: token,
      },
    }
  );
};
