import layoutStateReducer from '../layout';
import { initLayoutState,
         toggleSideDrawer,
         toggleGettingStarted,
         loginUserAction,
         logoutUser,
         toggleRegisteringBusiness } from '../../actions/actions';

describe('layoutStateReducer', () => {
    let initState;

    beforeEach(() => {
        initState = {
            sideDrawerOpen: false,
            userGettingStarted: false,
            registeringBusiness: false,
            showLayoutForAuthenticatedUser: localStorage.getItem('accessToken')
        };
        localStorage.clear();
    });

    it('returns initial state', () => {
        expect.assertions(1);

        const initStateAction = initLayoutState();
        const state = layoutStateReducer(initState, initStateAction);
        expect(state).toEqual(initState);
    });

    it('toggles side drawer', () => {
        expect.assertions(2);

        const expectedStateOpen = {
            ...initState,
            sideDrawerOpen: true,
        };
        const toggleSideDrawerAction = toggleSideDrawer();
        const stateOpen = layoutStateReducer(initState, toggleSideDrawerAction);
        expect(stateOpen).toEqual(expectedStateOpen);
        // close the side drawer again
        const stateClose = layoutStateReducer(stateOpen, toggleSideDrawerAction);
        expect(stateClose).toEqual(initState);

    });

    it('toggles getting started', () => {
        expect.assertions(2);

        const expectedStateGettingStarted = {
            ...initState,
            userGettingStarted: true,
        };

        const gettingStartedAction = toggleGettingStarted();
        const stateGettingStarted = layoutStateReducer(initState, gettingStartedAction);
        expect(stateGettingStarted).toEqual(expectedStateGettingStarted);

        // switch getting started
        const stateNotGettingStarted = layoutStateReducer(stateGettingStarted, gettingStartedAction);
        expect(stateNotGettingStarted).toEqual(initState);
    });

    it('shows layout for authenticated users when user logs in', () => {
        expect.assertions(1);

        const initLoginState = {
            ...initState,
            userGettingStarted: true
        }

        const expectedState = {
            ...initState,
            showLayoutForAuthenticatedUser: true
        };

        const loginAction = loginUserAction('a.user.token');
        const stateLoggedIn = layoutStateReducer(initLoginState, loginAction);
        expect(stateLoggedIn).toEqual(expectedState);
    });

    it('hides layout for authenticated users upon logout', () => {
        expect.assertions(1);

        const initStateLoggedIn = {
            ...initState,
            showLayoutForAuthenticatedUser: true
        };

        const expectedState = {
            ...initState,
            showLayoutForAuthenticatedUser: false
        };

        const logoutAction = logoutUser();
        const stateLoggedOut = layoutStateReducer(initStateLoggedIn, logoutAction);
        expect(stateLoggedOut).toEqual(expectedState);
    });

    it('toggles registering business', () => {
        const notRegisteringState = {
            ...initState,
            registeringBusiness: false
        }

        const expectedState = {
            ...initState,
            registeringBusiness: true
        }

        const registeringAction = toggleRegisteringBusiness();
        const newState = layoutStateReducer(notRegisteringState, registeringAction);
        expect(newState).toEqual(expectedState);
    });

    it('returns default state', () => {
        expect.assertions(1);

        const anotherAction = {type: 'ANOTHER_ACTION'}
        const state = layoutStateReducer(initState, anotherAction);
        expect(state).toEqual(initState);
    })
});
