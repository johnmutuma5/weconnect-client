import Business from '../Business';

describe('<Business /> Component', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Business
                                    name='business name'
                                    category='tech'
                                    location='a place' />);
        expect(wrapper).toMatchSnapshot();
    })
})
