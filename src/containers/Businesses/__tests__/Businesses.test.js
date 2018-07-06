import Businesses from '../Businesses';
import { createStore } from '../../../store';
import weConnectReducer from '../../../store/baseReducer';


jest.mock('../../../store/resources/business');

describe('<Businesses /> Component', () => {
    let store, context;

    beforeEach(() => {
        store = createStore(weConnectReducer);
        store.state = {};
        store.state.layoutState = {};
        context = { store: store, layoutState: store.state.layoutState }
    })

    it('renders correctly', () => {
        const wrapper = shallow(<Businesses />, { context });
        expect(wrapper.find('article')).toHaveLength(1);
    });


    it('fetches businesses from API and renders on mount', (done) => {
        const wrapper = shallow(<Businesses />, { context });

        setTimeout(() => {
            wrapper.update();
            expect(wrapper.find('business')).toHaveLength(1);
            done();
        });
    });
})
