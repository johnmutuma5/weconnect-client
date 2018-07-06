import ajax from '../';

describe('ajax', () => {
    beforeEach(() => {
        ajax.config({baseURL: 'example.com'});
    });

    it('returns a Promise on post', () => {
        const value = ajax.post('/', {});
        expect(value).toBeInstanceOf(Promise);
    });

    it('returns a Promise on get', () => {
        const value = ajax.get('/', {});
        expect(value).toBeInstanceOf(Promise);
    });

    it('returns a Promise on put', () => {
        const value = ajax.put('/', {});
        expect(value).toBeInstanceOf(Promise);
    });

    it('returns a Promise on delete', () => {
        const value = ajax.delete('/', {});
        expect(value).toBeInstanceOf(Promise);
    });
})
