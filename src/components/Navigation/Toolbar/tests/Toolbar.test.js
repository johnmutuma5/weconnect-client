import MemoryRouter from 'react-router-dom';
import Toolbar from '../Toolbar';

describe('<Toolbar /> Component', () => {
    let context;

    beforeEach(() => {
        store.state.authState = { userToken: undefined };
        context = {
            store,
            layoutState: {}
        }
    });

    it('renders correctly', () => {
        const wrapper = shallow(<Toolbar />, { context });
        expect(wrapper).toMatchSnapshot();
    });

    it('displays logout button when authenticated', () => {
        expect.assertions(2);
        context.store.state.authState = { userToken: 'a.user.token'};
        context.layoutState = {showLayoutForAuthenticatedUser: true}

        const wrapper = shallow(<Toolbar />, { context });
        expect(wrapper).toMatchSnapshot();

        const buttonText = wrapper.find('button').dive().text();
        expect(buttonText).toContain('Logout');
    });
})
