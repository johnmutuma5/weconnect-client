import { UserRegistrationForm } from '../UserRegistrationForm';

describe('<UserRegistrationForm />', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<UserRegistrationForm />);
        expect(wrapper).toMatchSnapshot();
    });

    it ('collects data from input fields into state', () => {
        expect.assertions(3);
        const wrapper = mount(<UserRegistrationForm isVisible />);
        expect(wrapper).toMatchSnapshot();
        wrapper.find('input[name="username"]')
            .simulate('change', {target: {name: 'username', value: 'john_doe'}});
        wrapper.find('input[name="password"]')
            .simulate('change', {target: {name: 'password', value: 'apassword'}});

        expect(wrapper.instance().state.values.username).toBe('john_doe');
        expect(wrapper.instance().state.values.password).toBe('apassword');
    });
});
