import authStateReducer from '../auth';
import { loginUserAction, logoutUser } from '../../actions/actions';

describe('authStateReducer', () => {
    let userToken;
    let initState;

    beforeEach(() => {
        userToken = 'a.user.token';
        // initial authState
        initState = {
            userToken: localStorage.getItem('userToken')
        };
    });

    it('it updates userToken on login', () => {
        expect.assertions(1); // this test expects one assertion

        const expectedStateAfterLogin = {
            userToken: userToken
        }
        const loginAction = loginUserAction(userToken);
        const newState = authStateReducer(initState, loginAction);
        expect(newState).toEqual(expectedStateAfterLogin);
    });



    it('it clears userToken on logout', () => {
        expect.assertions(1);

        const initState = {
            userToken: userToken
        };

        const expectedStateAfterLogout = {
            userToken: undefined
        }
        const logoutAction = logoutUser();
        const newState = authStateReducer(initState, logoutAction);
        expect(newState).toEqual(expectedStateAfterLogout);
    });

    it('returns default state with any other actions', () => {
        expect.assertions(1);
        const anotherAction = {type: 'ANOTHER_ACTION'};
        const newState = authStateReducer(initState, anotherAction);
        expect(newState).toEqual(initState);
    });
})
