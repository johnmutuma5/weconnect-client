import actionTypes from '../actions/actionTypes';


const initState = {
    sideDrawerOpen: false,
    userGettingStarted: false,
    registeringBusiness: false,
    showLayoutForAuthenticatedUser: localStorage.getItem('accessToken')
};

const layoutStateReducer = (state=initState, action) => {
    switch (action.type) {
        case actionTypes.INIT_LAYOUT_STATE:
            // return default state
            return state;

        case actionTypes.TOGGLE_SIDE_DRAWER:
            const newState = {
                ...state,
                sideDrawerOpen: !state.sideDrawerOpen
            }
            return newState;

        case actionTypes.TOGGLE_GETTING_STARTED:
            return  {
                        ...state,
                        userGettingStarted: !state.userGettingStarted,
                        sideDrawerOpen: false
                    }

        case actionTypes.TOGGLE_REGISTERING_BUSINESS:
            return  {
                        ...state,
                        registeringBusiness: !state.registeringBusiness
                    }

        case actionTypes.LOGIN_USER:
            return {
                ...state,
                userGettingStarted: !state.userGettingStarted,
                showLayoutForAuthenticatedUser: !state.showLayoutForAuthenticatedUser,
                sideDrawerOpen: false
            }

        case actionTypes.LOGOUT_USER:
            return {
                ...state,
                showLayoutForAuthenticatedUser: !state.showLayoutForAuthenticatedUser,
                sideDrawerOpen: false
            }

        default:
            return state;

    }
};

export default layoutStateReducer;
