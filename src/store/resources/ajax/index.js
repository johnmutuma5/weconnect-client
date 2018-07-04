import HttpRequests from './ajax';

const ajax = new HttpRequests();
ajax.config(
    {
        headers: {
            'Content-Type': 'application/json'
        },
        baseURL: 'http://weconnect-api-heroku.herokuapp.com/api/v2'
    }
);

export default ajax;
