import { MemoryRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Toolbar from '../Toolbar';
import { store } from '../../../../App'

describe('<Toolbar /> Component', () => {
    let context;

    beforeEach(() => {

        store.state = {
            authState: { userToken: undefined },
            layoutState: {}
        };
        context = {
            store
        }
    });

    it('renders correctly', () => {
        const wrapper = shallow(<Toolbar />, { context });
        expect(wrapper).toMatchSnapshot();
    });

    it('displays logout button when authenticated', () => {
        expect.assertions(2);
        context.store.state.authState = { userToken: 'a.user.token'};
        context.store.state.layoutState = {showLayoutForAuthenticatedUser: true}

        const wrapper = mount(<MemoryRouter><Toolbar /></MemoryRouter>,
                                { context,
                                  childContextTypes: {
                                      store: PropTypes.object.isRequired
                                  }});
                                  
        expect(wrapper).toMatchSnapshot();

        const buttonText = wrapper.find('.Button').text();
        expect(buttonText).toContain('Logout');
    });
})
