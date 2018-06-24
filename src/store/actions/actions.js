import types from './actionTypes';


const renderFetchedBusinesses = (businesses=[]) => (
    {
        type: types.RENDER_FETCHED_BUSINESSES,
        payload: businesses
    }
);

const initBusinessesState = () => (
    {
        type: types.INIT_BUSINESSES_STATE
    }
);

// export all the action creators
export default {
    renderFetchedBusinesses: renderFetchedBusinesses,
    initBusinessesState: initBusinessesState
}
