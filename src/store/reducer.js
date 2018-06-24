// the reducer will be passed into the store and this is what the store
// shall be using to calculate the next state. It has an initial state and it
// returns a state computed deeply by more specific reducers.
import actionTypes from './actions/actionTypes';

const initState = {
    businessesState: undefined
}


const weConnectReducer = (state=initState, action) => (
    {
        businessesState: businessesStateReducer(state.businessesState, action)
    }
);



const initialBusinessesState = {
    businesses: [],
    loading: true
}
const businessesStateReducer = (state=initialBusinessesState, action) => {
    switch (action.type) {
        case actionTypes.GET_INITIAL_BUSINESSES_STATE:
            return state;

        case actionTypes.GET_BUSINESSES:
            const newState = {
                businesses: state.businesses.concat(action.payload),
                loading: false
            };
            return newState;

        default:
            return state;
    }
}


export default weConnectReducer;
