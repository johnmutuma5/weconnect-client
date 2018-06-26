import HttpRequests from './ajax';

const ajax = new HttpRequests();
ajax.config(
    {
        headers: {
            'Content-Type': 'application/json'
        }
    }
);

export default ajax;
