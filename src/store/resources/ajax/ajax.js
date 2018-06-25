class HttpRequests {

    constructor (baseURL = null, requestHeaders = {}) {
        this.baseURL = baseURL;
        this.requestHeaders = requestHeaders;
    };

    createAjaxPromise (endpoint, method_type, data = null) {
        const destination = this.baseURL ? this.baseURL + endpoint : endpoint;
        const requestHeaders = this.requestHeaders;

        const prom = new Promise (function (res, rej) {
            let xhr = new XMLHttpRequest();
            xhr.open(method_type, destination, true); // true async

            for (let item in requestHeaders)
                xhr.setRequestHeader(item, requestHeaders[item]);

            xhr.onreadystatechange = function () {
                    if (this.readyState === 4 && this.status === 200) {
                    res(JSON.parse(this.responseText));
                }
            }
            xhr.send(data);
        });

        return prom;
    };

    config (conf_obj) {
        for (let item in conf_obj) {
            if (item === "baseURL")
            this.baseURL = conf_obj[item];

            if (item === "requestHeaders")
            Object.assign(this.requestHeaders, conf_obj[item]);
        }
    };


    post (endpoint, data) {
        let post_data = JSON.stringify(data);
        return this.createAjaxPromise(endpoint, 'POST', post_data);
    };

    get (endpoint) {
        return this.createAjaxPromise(endpoint, 'GET');
    }

}



export default HttpRequests;
