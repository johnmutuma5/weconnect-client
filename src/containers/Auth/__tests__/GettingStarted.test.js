import GettingStarted from '../GettingStarted';
import UserRegistrationForm from '../UserRegistration/UserRegistrationForm';
import { store } from '../../../App';

describe('<GettingStarted />', () => {
    let context;

    beforeEach(() => {
        context = {
            context: { store },
            childContextTypes: {
                store: PropTypes.object
            }
        }
    });


    it('renders correctly', () => {
        const wrapper = shallow(<GettingStarted />, context);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders user login form as the default form', () => {
        expect.assertions(2);
        const wrapper = mount(<MemoryRouter><GettingStarted /></MemoryRouter>, context);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.text()).toContain('Login');
    });

    it('toggles sign up and login form with button click', () => {
        expect.assertions(2);
        const wrapper = mount(<MemoryRouter>
                                <GettingStarted />
                              </MemoryRouter>, context);
        wrapper.find('.Button').simulate('click');
        const state = wrapper.find(GettingStarted).instance().state;
        expect(state).toEqual({startBy: 'signUp'});
        expect(wrapper.text()).toContain('Register a user account');
    });
});
