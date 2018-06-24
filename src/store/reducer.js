// the reducer will be passed into the store and this is what the store
// shall be using to calculate the next state. It has an initial state and it
// returns a state computed deeply by more specific reducers.
import actionTypes from './actions/actionTypes';

const initState = {
    businesses: []
}


const weConnectReducer = (state=initState, action) => (
    {
        businesses: businessesReducer(state.businesses, action)
    }
);


const businessesReducer = (state=[], action) => {
    if (action.type === actionTypes.GET_BUSINESSES){
        const newState = state.concat(action.payload);
        return newState;
    }
    return state;
}


export default weConnectReducer;
