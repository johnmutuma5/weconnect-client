import Navigation from '../Navigation';

describe('<Navigation /> Component', () => {
    let context;

    beforeEach(() => {
        context = {
            layoutState: {
                store: {},
                sideDrawerOpen: false
            }
        };
    });


    it('renders correctly', () => {
        const wrapper = shallow(<Navigation />, { context });
        expect(wrapper).toMatchSnapshot();
    });


    it('dispatches toggleSideDrawer action when sideDrawer Backdrop is clicked', () => {
        const backDropClickSpy = sinon.spy();
        const backdropWrapper = shallow(<Navigation />, { context })
                                    .find('#SideDrawerBackDrop')
                                    .dive(); // re-shallow the backdrop to setProps

        backdropWrapper
            .setProps({click: backDropClickSpy})
            .simulate('click');
        expect(backDropClickSpy.calledOnce).toBe(true);
    })
})
