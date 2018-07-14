import authStateReducer from '../auth';
import { loginUserAction, logoutUser } from '../../actions/actions';

describe('authStateReducer', () => {
    let accessToken, initState, userId, userFullName;

    beforeEach(() => {
        accessToken = 'a.user.token';
        userId= '1000';
        userFullName= 'John Doe';
        // initial authState
        initState = {
            accessToken: localStorage.getItem('accessToken'),
            userId: localStorage.getItem('userId')
        };
    });


    it('it updates accessToken on login', () => {
        expect.assertions(1); // this test expects one assertion

        const expectedStateAfterLogin = {
            accessToken: accessToken,
            userId: userId,
            userFullName: userFullName
        }
        const loginAction = loginUserAction(expectedStateAfterLogin);
        const newState = authStateReducer(initState, loginAction);
        expect(newState).toEqual(expectedStateAfterLogin);
    });


    it('it clears accessToken on logout', () => {
        expect.assertions(1);

        const initState = {
            accessToken: accessToken
        };

        const expectedStateAfterLogout = {
            accessToken: undefined
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
