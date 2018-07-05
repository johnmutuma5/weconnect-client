/// sanity test

describe('testing setUp is Ok.', () => {
    test('it is ok', () => {
        expect.assertions(3);
        expect(shallow).not.toBeNull();
        expect(React).not.toBeNull();
        expect(localStorage).not.toBeNull();
    })
})
