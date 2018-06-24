// the reducer will be passed into the store and this is what the store
// shall be using to calculate the next state. It has an initial state and it
// returns a state computed deeply by more specific reducers.
import businessesStateReducer from './reducers/businesses';

const initState = {
    businessesState: undefined
}


const weConnectReducer = (state=initState, action) => (
    {
        businessesState: businessesStateReducer(state.businessesState, action)
    }
);

export default weConnectReducer;
