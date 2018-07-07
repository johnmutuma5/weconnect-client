// the reducer will be passed into the store and this is what the store
// shall be using to calculate the next state. It has an initial state and it
// returns a state computed deeply by more specific reducers.
import businessesStateReducer from './reducers/businesses';
import authStateReducer from './reducers/auth';
import layoutStateReducer from './reducers/layout';

const initState = {
    businessesState: undefined,
    authState: undefined,
    layoutState: undefined
};


const weConnectReducer = (state=initState, action) => (
    {
        businessesState: businessesStateReducer(state.businessesState, action),
        authState: authStateReducer(state.authState, action),
        layoutState: layoutStateReducer(state.layoutState, action),
    }
);

export default weConnectReducer;
