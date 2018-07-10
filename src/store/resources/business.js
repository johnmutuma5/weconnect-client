import ajax from './ajax';


export function loadBusinesses() {
    return ajax.get('/businesses');
}


export function registerNewBusiness(businessData, userToken) {
    return ajax
            .config({headers: {Authorization: `Bearer ${userToken}`}})
            .post('/businesses', businessData)
}

export function weConnectFetchPrimaryBusinessInfo(id) {
    return ajax.get(`/businesses/${id}`);
}

export function weConnectFetchBusinessReviews(id) {
    return ajax.get(`/businesses/${id}/reviews`);
}

export function weConnectAddBusinessReview(id, data, userToken) {
    return ajax
            .config({headers: {Authorization: `Bearer ${userToken}`}})
            .post(`/businesses/${id}/reviews`, data);
}

export function weConnectFilterBusinesses(queryString) {
    return ajax.get(`/businesses/filter${queryString}`);
}

export function weConnectUpdateBusiness(id, data, userToken) {
    return ajax
            .config({headers: {Authorization: `Bearer ${userToken}`}})
            .put(`/businesses/${id}`, data);
}

export function weConnectDeleteBusiness(id, userToken) {
    return ajax
            .config({headers: {Authorization: `Bearer ${userToken}`}})
            .delete(`/businesses/${id}`);
}
