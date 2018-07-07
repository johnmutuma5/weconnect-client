import types from './actionTypes';

// BUSINESS
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

//AUTH
export const loginUserAction = (auth_token) => (
    {
        type: types.LOGIN_USER,
        payload: auth_token
    }
);

export const logoutUser = () => (
    {
        type: types.LOGOUT_USER
    }
);

// LAYOUT

export const initLayoutState = () => (
    {
        type: types.INIT_LAYOUT_STATE
    }
);

export const toggleSideDrawer = () => (
    {
        type: types.TOGGLE_SIDE_DRAWER
    }
);

export const toggleGettingStarted = () => (
    {
        type: types.TOGGLE_GETTING_STARTED
    }
);

export const toggleRegisteringBusiness = () => (
    {
        type: types.TOGGLE_REGISTERING_BUSINESS
    }
);
