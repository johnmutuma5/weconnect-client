import actionTypes from '../actions/actionTypes';


const initFilterToolsState = {
    filters: {
        category: '',
        location: '',
        name: ''
    },
    filterFormActive: false
};


const filterToolsStateReducer = (state=initFilterToolsState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_FILTER_VALUES:
            return {
                ...state,
                filters: action.payload,
                filterFormActive: true
            }

        case actionTypes.TOGGLE_FILTER_FORM:
            return {
                ...state,
                filterFormActive: !state.filterFormActive
            }

        case actionTypes.INIT_FILTER_TOOLS_STATE:
        default:
            return state;

    }
}

export default filterToolsStateReducer;
