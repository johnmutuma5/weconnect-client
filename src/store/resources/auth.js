import ajax from './ajax';

export function createAccount(data) {
    let prom = ajax.post('/auth/register', data);
    return prom;
}

export function weConnectLoginUser(data) {
    let prom = ajax.post('/auth/login', data);
    return prom;
}


export function weConnectLogoutUser(userToken) {
    ajax.config({
        headers: {Authorization: `Bearer ${userToken}`}
    });
    return ajax.post('/auth/logout');
}
