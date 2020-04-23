import axios from "axios";

export const getAllTrips = (trips) => {
  return {
    type: "GET_ALL_TRIPS",
    payload: {
      trips,
    },
  };
};

export const getTrips = () => async (dispatch, getState) => {
  const response = await axios.get(
    "https://us-central1-missao-newton.cloudfunctions.net/futureX/luan/trips"
  );

  dispatch(getAllTrips(response.data.trips));
  // console.log(response.data.trips)
};

export const applyToTrip = (body, id) => async (dispatch, getState) => {
  const response = await axios.post(
    `https://us-central1-missao-newton.cloudfunctions.net/futureX/luan/trips/${id}/apply`,
    body
  );

  dispatch(getTrips());
  console.log("Foi caralho");
};

export const createNewTrip = (body) => async (dispatch, getState) => {
  const response = await axios.post(
    `https://us-central1-missao-newton.cloudfunctions.net/futureX/luan/trips`,
    body
  );

  console.log("Foi caralho!!")
};
