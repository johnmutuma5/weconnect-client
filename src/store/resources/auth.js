import ajax from './ajax';

export function createAccount(data) {
    return ajax.post('/auth/register', data);
}

export function weConnectLoginUser(data) {
    return ajax.post('/auth/login', data);
}


export function weConnectLogoutUser(accessToken) {
    return ajax
            .config({headers: {Authorization: `Bearer ${accessToken}`}})
            .post('/auth/logout');
}
