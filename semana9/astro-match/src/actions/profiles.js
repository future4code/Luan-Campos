import axios from "axios";

// SYNC
export const setProfile = (profile) => {
  return {
    type: "SET_PROFILE",
    payload: {
      profile,
    },
  };
};

export const setMatchedProfile = (profile) => {
  return {
    type: "SET_MATCHED_PROFILE",
    payload: {
      matchedProfile: profile,
    },
  };
};

export const setSelectedProfile = (profile) => {
  return{
    type: "SET_SELECTED_PROFILE",
    payload: {
      profile
    }
  }
}

// ASYNC
export const getProfile = () => async (dispatch, getState) => {
  const response = await axios.get(
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luan/person"
  );

  dispatch(setProfile(response.data.profile));

};

export const chooseProfile = (id, choice) => async (dispatch, getState) => {
  const body = {
    id: id,
    choice: choice,
  };

  const response = await axios.post(
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luan/choose-person",
    body
  );
 
  dispatch(getProfile());
};

export const getMatches = () => async (dispatch, getState) => {
  const response = await axios.get(
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luan/matches"
  );

  dispatch(setMatchedProfile(response.data.matches));
};

export const clearSwipes = () => async (dispatch, getState) => {
  await axios.put(
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luan/clear"
  );

  dispatch(getMatches());
};
