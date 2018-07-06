import Businesses from '../Businesses';
import { createStore } from '../../../store';
import weConnectReducer from '../../../store/baseReducer';

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
})
