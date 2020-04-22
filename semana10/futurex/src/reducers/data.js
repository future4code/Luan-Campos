const initialState = {
    trips: []
}

const data = (state = initialState, action) => {
    switch(action.type){
        case "GET_ALL_TRIPS": {
            return {...state, trips: action.payload.trips}
        }
        default:
            return state
    }
}

export default data