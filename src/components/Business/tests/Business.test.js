import Business from '../Business';

describe('<Business /> Component', () => {
    let business;
    beforeEach(() => {
        business = <Business
                        name='business name'
                        category='tech'
                        location='a place' />
    })

    it('renders correctly', () => {
        const wrapper = shallow(business);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders Business Thumbnail', () => {
        const wrapper = mount(business);
        const businessThumbnail = wrapper
            .find('.BusinessThumbnail')
        expect(businessThumbnail).toHaveLength(1);
    })
})
