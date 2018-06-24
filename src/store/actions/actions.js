import types from './actionTypes';


const getBusinesses = (businesses=[]) => (
    {
        type: types.GET_BUSINESSES,
        payload: businesses
    }
);

const getInitialBusinessesState = () => (
    {
        type: types.GET_INITIAL_BUSINESSES_STATE
    }
);

// export all the action creators
export default {
    getBusinesses: getBusinesses,
    getInitialBusinessesState: getInitialBusinessesState
}
