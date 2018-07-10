import GettingStarted from '../GettingStarted';
import UserRegistrationForm from '../UserRegistration/UserRegistrationForm';
import { store } from '../../../App';

describe('<GettingStarted />', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<GettingStarted />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders user sign up form as the default form', () => {
        expect.assertions(2);
        const wrapper = mount(<MemoryRouter><GettingStarted /></MemoryRouter>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.text()).toContain('Register a user account');
    });

    it('toggles sign up and login form with state', () => {
        const context = {
                            context: { store },
                            childContextTypes: {
                                store: PropTypes.object
                            }
                        }
        const wrapper = mount(<MemoryRouter>
                                <GettingStarted />
                              </MemoryRouter>, context);
        wrapper.find('.Button').simulate('click');
        const state = wrapper.find(GettingStarted).instance().state;
        expect(state).toEqual({startBy: 'login'});
        expect(wrapper.text()).toContain('Login');
    });
});
