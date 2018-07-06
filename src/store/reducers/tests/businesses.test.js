import businessesStateReducer from '../businesses';
import { initBusinessesState, renderFetchedBusinesses } from '../../actions/actions';



describe('businessesStateReducer', () => {

    let initState;

    beforeEach(() => {
        initState = {
            businesses: [],
            loading: true,
            registeringNew: false
        }
    })

    it('returns initial state', () => {
        expect.assertions(1);

        const initStateAction = initBusinessesState();
        const state = businessesStateReducer(initState, initStateAction);
        expect(state).toEqual(initState);
    });

    it('returns new state with businesses from render action', () => {
        expect.assertions(1);

        const businessesData = [{
            name: 'Andela Kenya',
            category: 'Technology & Software'
        }];

        const expectedState = {
            businesses: businessesData,
            loading: false,
            registeringNew: false
        }
        const renderBusinessesAction = renderFetchedBusinesses(businessesData);
        const state = businessesStateReducer(initState, renderBusinessesAction);
        expect(state).toEqual(expectedState);
    });

    it('returns default state with other actions', () => {
        expect.assertions(1);

        const anotherAction = {type: 'ANOTHER_ACTION'};
        const state = businessesStateReducer(initState, anotherAction);
        expect(state).toEqual(initState);
    });
});
