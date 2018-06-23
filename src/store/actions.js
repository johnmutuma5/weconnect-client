const getBusinesses = (businesses) => (
    {
        type: 'GET_BUSINESSES',
        payload: businesses
    }
);


export default {
    getBusinesses: getBusinesses
}
