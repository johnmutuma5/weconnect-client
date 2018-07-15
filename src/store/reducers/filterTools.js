import actionTypes from '../actions/actionTypes';


const initFilterToolsState = {
    filters: {
        category: 'de',
        location: 'def',
        name: 'def'
    },
    filterFormActive: false
};


const filterToolsStateReducer = (state=initFilterToolsState, action) => {
    switch (action.type) {
        case actionTypes.INIT_FILTER_TOOLS_STATE:
        default:
            return state;

    }
}

export default filterToolsStateReducer;
