const initialState = {
  trips: [],
  tripInfo: [],
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_TRIPS": {
      return { ...state, trips: action.payload.trips };
    }
    case "GET_TRIP_INFO": {
      return { ...state, tripInfo: action.payload.infos };
    }
    default:
      return state;
  }
};

export default data;
