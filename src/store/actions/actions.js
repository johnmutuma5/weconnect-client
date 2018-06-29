import types from './actionTypes';


export const renderFetchedBusinesses = (businesses=[]) => (
    {
        type: types.RENDER_FETCHED_BUSINESSES,
        payload: businesses
    }
);

export const initBusinessesState = () => (
    {
        type: types.INIT_BUSINESSES_STATE
    }
);


export const loginUserAction = (auth_token) => (
    {
        type: types.LOGIN_USER,
        payload: auth_token
    }
)

// export all the action creators
export default {
    renderFetchedBusinesses: renderFetchedBusinesses,
    initBusinessesState: initBusinessesState,
    loginUserAction: loginUserAction
}
