import Layout from '../Layout';
import { createStore } from '../../../store';
import weConnectReducer from '../../../store/baseReducer';

describe('<Layout /> Component', () => {
    it('renders correctly', () => {
        const store = createStore(weConnectReducer);
        const context = { store: store };
        const wrapper = shallow(<Layout />, { context });
        expect(wrapper).toMatchSnapshot();
    });
})
