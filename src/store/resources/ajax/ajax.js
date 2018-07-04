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
            // set request headers
            for (let item in requestHeaders)
                xhr.setRequestHeader(item, requestHeaders[item]);
            // add event handler
            xhr.onreadystatechange = function () {
                let ok_codes = [200, 201]
                if (this.readyState === 4 && ok_codes.includes(this.status)) {
                    res(JSON.parse(this.responseText));
                }
                else if(this.readyState === 4 && !ok_codes.includes(this.status)){
                    rej(JSON.parse(this.responseText));
                }
            }
            // send the request
            xhr.send(data);
        });

        return prom;
    };

    config (conf_obj) {
        for (let item in conf_obj) {
            if (item === "baseURL")
            this.baseURL = conf_obj[item];

            if (item === "headers")
            Object.assign(this.requestHeaders, conf_obj[item]);
        }
    };


    post (endpoint, data) {
        const post_data = JSON.stringify(data);
        return this.createAjaxPromise(endpoint, 'POST', post_data);
    };

    get (endpoint) {
        return this.createAjaxPromise(endpoint, 'GET');
    }

    put (endpoint, data) {
        const putData = JSON.stringify(data);
        return this.createAjaxPromise(endpoint, 'PUT', putData);
    }

    delete (endpoint) {
        return this.createAjaxPromise(endpoint, 'DELETE');
    }

}



export default HttpRequests;
