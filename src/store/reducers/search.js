import actionTypes from '../actions/actionTypes';


const initState = {
    values: {
        searchValue: ''
    },
    searchVisible: false
}

const searchFieldStateReducer = (state=initState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_NAME:
            return {
                ...state,
                values: searchValuesReducer(state.values, action),
                searchVisible: false
            }
        case actionTypes.INIT_SEARCH_STATE:
        default:
            return state;
    }
}


const initSearchValuesState = {
    searchValue: ''
}

const searchValuesReducer = (state=initSearchValuesState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_NAME:
            return {
                ...state,
                searchValue: action.payload
            }
        default:
            return state

    }
}


export default searchFieldStateReducer;
