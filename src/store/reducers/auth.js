import actionTypes from '../actions/actionTypes';


const initState = {
    userToken: localStorage.getItem('userToken')
};



const authStateReducer =  (state=initState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
            const userToken = action.payload;
            localStorage.setItem('userToken', userToken);
            const newState = {
                ...state,
                userToken: userToken
            }
            return newState;
        case actionTypes.LOGOUT_USER:
            localStorage.clear();
            return {
                ...state,
                userToken: undefined
            }
        default:
            return state

    }
};

export default authStateReducer;
