import ajax from './ajax';


export function loadBusinesses() {
    const prom = ajax.get('http://127.0.0.1:8080/api/v2/businesses');
    return prom;
}


export function registerNewBusiness(businessData, userToken) {
    ajax.config({
        headers: {Authorization: `Bearer ${userToken}`}
    })
    return ajax.post('http://127.0.0.1:8080/api/v2/businesses', businessData)
}

export function weConnectFetchPrimaryBusinessInfo(id) {
    const prom = ajax.get(`http://127.0.0.1:8080/api/v2/businesses/${id}`);
    return prom;
}

export function weConnectFetchBusinessReviews(id) {
    const prom = ajax.get(`http://127.0.0.1:8080/api/v2/businesses/${id}/reviews`);
    return prom;
}

export function weConnectAddBusinessReview(id, data, userToken) {
    ajax.config({
        headers: {Authorization: `Bearer ${userToken}`}
    })
    return  ajax.post(`http://127.0.0.1:8080/api/v2/businesses/${id}/reviews`, data);
}
