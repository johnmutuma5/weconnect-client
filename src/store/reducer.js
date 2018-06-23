const initState = {
    businesses: []
}


const weConnectReducer = (state=initState, action) => {
    return {
        businesses: businessesReducer(state.businesses, action)
    }
}


const businessesReducer = (state=[], action) => {
    return state;
}


export default weConnectReducer;
