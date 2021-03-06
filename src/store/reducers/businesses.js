import actionTypes from '../actions/actionTypes';


const initialBusinessesState = {
    businesses: [],
    loading: true,
}

const businessesStateReducer = (state=initialBusinessesState, action) => {
    switch (action.type) {
        case actionTypes.INIT_BUSINESSES_STATE:
            return state;

        case actionTypes.RENDER_FETCHED_BUSINESSES:
            const newState = {
                ...state,
                businesses: action.payload,
                loading: false
            };
            return newState;

        default:
            return state;
    }
}


export default businessesStateReducer;
