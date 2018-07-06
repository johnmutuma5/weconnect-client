import Business from '../Business';

describe('<Business /> Component', () => {
    let props;

    beforeEach(() => {
        // business =
        props = {
            name: 'business name',
            category: 'tech',
            location: 'a place',
        }
    })

    it('renders correctly', () => {
        const wrapper = shallow(<Business { ...props } />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders Business Thumbnail', () => {
        const wrapper = mount(<Business { ...props } />);
        const businessThumbnail = wrapper
            .find('.BusinessThumbnail')
        expect(businessThumbnail).toHaveLength(1);
    })
})
