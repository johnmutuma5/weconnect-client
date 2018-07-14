import actionTypes from '../actions/actionTypes';


const initState = {
    accessToken: localStorage.getItem('accessToken'),
    userId: localStorage.getItem('userId'),
    userFullName: localStorage.getItem('userFullName')
};



const authStateReducer =  (state=initState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
            localStorage.setItem('accessToken', action.payload.accessToken);
            localStorage.setItem('userId', action.payload.userId);
            localStorage.setItem('userFullName', action.payload.userFullName);

            const newState = {
                ...state,
                accessToken: action.payload.accessToken,
                userId: action.payload.userId,
                userFullName: action.payload.userFullName
            }
            return newState;
        case actionTypes.LOGOUT_USER:
            localStorage.clear();
            return {
                ...state,
                accessToken: undefined,
                userId: undefined,
                userFullName: undefined
            }
        default:
            return state

    }
};

export default authStateReducer;
