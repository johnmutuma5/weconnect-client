const mockResponse = (data) =>  (
    {msg: `SUCCESS: user ${data.username} created!`}
);

export function createAccount(data) {
    let prom = new Promise((resolve, reject) => {
        resolve(mockResponse(data));
    });
    return prom;
}
