import ajax from './ajax';

export function createAccount(data) {
    let prom = ajax.post('http://127.0.0.1:8080/api/v2/auth/register', data);
    return prom;
}
