import actionTypes from '../actions/actionTypes';


const initState = {
    sideDrawerOpen: false,
    userGettingStarted: false,
    showLayoutForAuthenticatedUser: false
};

const layoutStateReducer = (state=initState, action) => {
    console.log('layout ', state)
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
                        userGettingStarted: !state.userGettingStarted
                    }

        case actionTypes.LOGIN_USER:
            return {
                ...state,
                userGettingStarted: !state.userGettingStarted,
                showLayoutForAuthenticatedUser: !state.showLayoutForAuthenticatedUser
            }

        default:
            return state;

    }
};

export default layoutStateReducer;
