import Navigation from '../Navigation';
import { store } from '../../../App'


describe('<Navigation /> Component', () => {
    let context;

    beforeEach(() => {
        store.state = { layoutState: {}}
        context = { store };
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
