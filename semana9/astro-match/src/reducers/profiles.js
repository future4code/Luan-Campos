const initialState = {
  profileToSwipe: null,
  matchedProfiles: [],
  selectedProfile: {}

};

const profiles = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILE": {
      return { ...state, profileToSwipe: action.payload.profile };
    }

    case "SET_MATCHED_PROFILE": {
      return { ...state, matchedProfiles: action.payload.matchedProfile };
    }

    case "SET_SELECTED_PROFILE": {
      return { ...state, selectedProfile: action.payload.profile };
    }

    default:
      return state;
  }
};

export default profiles;
