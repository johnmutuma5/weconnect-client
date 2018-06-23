const initState = {
    businesses: []
}


const weConnectReducer = (state=initState, action) => {
    return {
        businesses: businessesReducer(state.businesses, action)
    }
}


const businessesReducer = (state=[], action) => {
    if (action.type === 'GET_BUSINESSES'){
        const newState = state.concat(action.payload);
        return newState;
    }
    return state;
}


export default weConnectReducer;
