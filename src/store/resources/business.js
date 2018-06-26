import ajax from './ajax';


export function loadBusinesses() {
    let prom = ajax.get('http://127.0.0.1:8080/api/v2/businesses');
    return prom;
}


export function registerNewBusiness(businessData) {
    console.log(businessData)
    return ajax.post('http://127.0.0.1:8080/api/v2/businesses', businessData)
}
