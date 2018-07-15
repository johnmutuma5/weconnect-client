// the reducer will be passed into the store and this is what the store
// shall be using to calculate the next state. It has an initial state and it
// returns a state computed deeply by more specific reducers.
import businessesStateReducer from './reducers/businesses';
import authStateReducer from './reducers/auth';
import layoutStateReducer from './reducers/layout';
import searchFieldStateReducer from './reducers/search';
import filterToolsStateReducer from './reducers/filterTools';

const initState = {
    businessesState: undefined,
    authState: undefined,
    layoutState: undefined,
    searchFieldState: undefined,
    filterToolsState: undefined
};


const weConnectReducer = (state=initState, action) => (
    {
        businessesState: businessesStateReducer(state.businessesState, action),
        authState: authStateReducer(state.authState, action),
        layoutState: layoutStateReducer(state.layoutState, action),
        searchFieldState: searchFieldStateReducer(state.searchFieldState, action),
        filterToolsState: filterToolsStateReducer(state.filterToolsState, action)
    }
);

export default weConnectReducer;
