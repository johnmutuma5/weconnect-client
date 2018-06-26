import ajax from './ajax';


function loadBusinesses() {
    let prom = ajax.get('http://127.0.0.1:8080/api/v2/businesses');
    return prom;
}

export default loadBusinesses;
