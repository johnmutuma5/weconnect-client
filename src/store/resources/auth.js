import ajax from './ajax';

export function createAccount(data) {
    return ajax.post('/auth/register', data);

export function weConnectLoginUser(data) {
    return ajax.post('/auth/login', data);
}


export function weConnectLogoutUser(userToken) {
    return ajax
            .config({headers: {Authorization: `Bearer ${userToken}`}})
            .post('/auth/logout');
}
