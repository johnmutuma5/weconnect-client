import ajax from './ajax';


export function loadBusinesses() {
    const prom = ajax.get('/businesses');
    return prom;
}


export function registerNewBusiness(businessData, userToken) {
    ajax.config({
        headers: {Authorization: `Bearer ${userToken}`}
    })
    return ajax.post('/businesses', businessData)
}

export function weConnectFetchPrimaryBusinessInfo(id) {
    const prom = ajax.get(`/businesses/${id}`);
    return prom;
}

export function weConnectFetchBusinessReviews(id) {
    const prom = ajax.get(`/businesses/${id}/reviews`);
    return prom;
}

export function weConnectAddBusinessReview(id, data, userToken) {
    ajax.config({
        headers: {Authorization: `Bearer ${userToken}`}
    });
    return  ajax.post(`/businesses/${id}/reviews`, data);
}

export function weConnectFilterBusinesses(queryString) {
    return ajax.get(`/businesses/filter${queryString}`);
}

export function weConnectUpdateBusiness(id, data, userToken) {
    ajax.config({
        headers: {Authorization: `Bearer ${userToken}`}
    })
    return ajax.put(`/businesses/${id}`, data);
}
