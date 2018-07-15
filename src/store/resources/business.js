import ajax from './ajax';


export function loadBusinesses() {
    return ajax.get('/businesses');
}


export function registerNewBusiness(businessData, accessToken) {
    return ajax
            .config({headers: {Authorization: `Bearer ${accessToken}`}})
            .post('/businesses', businessData)
}

export function weConnectFetchPrimaryBusinessInfo(id) {
    return ajax.get(`/businesses/${id}`);
}

export function weConnectFetchBusinessReviews(id) {
    return ajax.get(`/businesses/${id}/reviews`);
}

export function weConnectAddBusinessReview(id, data, accessToken) {
    return ajax
            .config({headers: {Authorization: `Bearer ${accessToken}`}})
            .post(`/businesses/${id}/reviews`, data);
}

export function weConnectFilterBusinesses(queryString) {
    console.log('sent')
    return ajax.get(`/businesses/filter${queryString}`);
}

export function weConnectUpdateBusiness(id, data, accessToken) {
    return ajax
            .config({headers: {Authorization: `Bearer ${accessToken}`}})
            .put(`/businesses/${id}`, data);
}

export function weConnectDeleteBusiness(id, accessToken) {
    return ajax
            .config({headers: {Authorization: `Bearer ${accessToken}`}})
            .delete(`/businesses/${id}`);
}
