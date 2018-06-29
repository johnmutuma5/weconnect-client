import actionTypes from '../actions/actionTypes';


const initState = {
    userToken: undefined
};


const authStateReducer =  (state=initState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
            const newState = {
                ...state,
                userToken: action.payload
            }
            return newState;
        default:
            return state

    }
};

export default authStateReducer;
