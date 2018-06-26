import HttpRequests from './ajax';

const ajax = new HttpRequests();
ajax.config(
    {
        headers: {
            'Content-Type': 'text/plain'
        }
    }
);

export default ajax;
