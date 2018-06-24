import types from './actionTypes';


const getBusinesses = (businesses=[]) => (
    {
        type: types.GET_BUSINESSES,
        payload: businesses
    }
);


export default {
    getBusinesses: getBusinesses
}
