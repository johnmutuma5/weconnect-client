import App from './App';
import ResourcesProvider, { createStore } from './store';
import weConnectReducer from './store/baseReducer';

describe('<App />', () => {
    test('global testing variables ok', () => {
        /// sanity test
        expect.assertions(3);
        expect(shallow).not.toBeNull();
        expect(React).not.toBeNull();
        expect(localStorage).not.toBeNull();
    });

    test('ResourcesProvider renders <App />', () => {
        const store = createStore(weConnectReducer);

        const wrapper = shallow(<ResourcesProvider store={store}>
                                    <App />
                                </ResourcesProvider>);
        expect(wrapper).toMatchSnapshot();
    });

    test('App renders correctly', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    })
})
