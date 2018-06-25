import actionTypes from '../actions/actionTypes';


const initialBusinessesState = {
    businesses: [],
    loading: true,
    registeringNew: false
}

const businessesStateReducer = (state=initialBusinessesState, action) => {
    switch (action.type) {
        case actionTypes.INIT_BUSINESSES_STATE:
            return state;

        case actionTypes.RENDER_FETCHED_BUSINESSES:
            const newState = {
                businesses: businessesListReducer(state.businesses, action),
                loading: false
            };
            return newState;

        default:
            return state;
    }
}

const businessesListReducer = (state=[], action) => {
    switch (action.type) {
        case actionTypes.RENDER_FETCHED_BUSINESSES:
            let newState = [...state, ...action.payload]
            return newState;
        default:
            return state;
    }
}

export default businessesStateReducer;
