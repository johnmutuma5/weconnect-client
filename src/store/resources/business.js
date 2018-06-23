const businesses = [
    {
        id: '1000',
        name: 'Andela Kenya',
        location: 'TRM, Drive',
        category: 'Software'
    },
    {
        id: '1001',
        name: 'Sleek',
        location: 'Ridgeways, Kiambu Rd',
        category: 'Fashion'
    },
    {
        id: '1002',
        name: 'Wenyeji Boys Ni Sisi',
        location: 'Ridgeways, Kiambu Rd',
        category: 'Software'
    },
    {
        id: '1003',
        name: 'Captured Memories',
        location: 'TRM, Drive',
        category: 'Photography'
    },
    {
        id: '1004',
        name: 'Standard Media',
        location: 'TRM, Drive',
        category: 'Media'
    },
    {
        id: '1005',
        name: 'Gold Diggers',
        location: 'TRM, Drive',
        category: 'Jewelry'
    }
]

function loadBusinesses() {
    let prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(businesses);
        }, 2000);
    });

    return prom;
}

export default loadBusinesses;
