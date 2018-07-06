const data = {
    "businesses": [
        {
            "category": "Technology",
            "id": 1004,
            "location": "TRM, Drive",
            "mobile": "254750020625",
            "name": "Andela Kenay",
            "owner": {
                "id": 1000,
                "name": "John Doe"
            }
        }
    ]
}



export function loadBusinesses() {
    const prom = new Promise((res, rej) => {
        res(data);
    })
    return prom;
};
