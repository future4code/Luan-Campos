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

export const applyToTrip = (form, id) => async (dispatch, getState) => {
  const response = await axios.post(
    `https://us-central1-missao-newton.cloudfunctions.net/futureX/luan/trips/${id}/apply`,
    form
  );
    
  dispatch(getTrips());
  console.log("Foi caralho")
};
