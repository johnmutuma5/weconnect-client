import actionTypes from '../actions/actionTypes';


const initState = {
    accessToken: localStorage.getItem('accessToken'),
    userId: localStorage.getItem('userId')
};



const authStateReducer =  (state=initState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
            localStorage.setItem('accessToken', action.payload.accessToken);
            localStorage.setItem('userId', action.payload.userId);
            const newState = {
                ...state,
                accessToken: action.payload.accessToken,
                userId: action.payload.userId
            }
            return newState;
        case actionTypes.LOGOUT_USER:
            localStorage.clear();
            return {
                ...state,
                accessToken: undefined,
                userId: undefined
            }
        default:
            return state

    }
};

export default authStateReducer;
