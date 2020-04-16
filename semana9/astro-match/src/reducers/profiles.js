const initialState = {
  profileToSwipe: null,
  matchedProfiles: []
};

const profiles = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILE": {
      return { ...state, profileToSwipe: action.payload.profile };
    }

    case "SET_MATCHED_PROFILE": {
      return { ...state, matchedProfiles: action.payload.matchedProfile };
    }

    default:
      return state;
  }
};

export default profiles;
