import { UserRegistrationForm } from '../UserRegistrationForm';

jest.mock('../../../../store/resources/auth')

describe('<UserRegistrationForm />', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<UserRegistrationForm />);
        expect(wrapper).toMatchSnapshot();
    });

    describe('UserRegistrationForm with simulated data', () => {
        let wrapper, username;
        beforeEach(() => {
            username = 'john_doe';
            wrapper = mount(<UserRegistrationForm isVisible />);
            wrapper.find('input[name="username"]')
                .simulate('change', {target: {name: 'username', value: username}});
            wrapper.find('input[name="password"]')
                .simulate('change', {target: {name: 'password', value: 'apassword'}});
        })

        it ('collects data from input fields into state', () => {
            expect.assertions(3);
            expect(wrapper).toMatchSnapshot();
            expect(wrapper.instance().state.values.username).toBe('john_doe');
            expect(wrapper.instance().state.values.password).toBe('apassword');
        });

        it('submits data and receives response asynchronously', (done) => {
            expect.assertions(1);
            wrapper.find('form')
                .simulate('submit');
            // wait for the next async tick
            setTimeout(() => {
                const successMessage = wrapper.instance().state.success_message;
                expect(successMessage).toEqual(`SUCCESS: user ${username} created!`);
                done();
            });
        });
    })
});
