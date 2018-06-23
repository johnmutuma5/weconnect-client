import weConnectReducer from './reducer';

let events = {
    'GET_BUSINESSES': []
}


class Store {
    constructor(reducer) {
        this.reducer = weConnectReducer;
        this.events = events
    }

    after(actionType, listener) {
        // this will be used to subscribe listeners to various actions
        this.events[actionType].push(listener);
        // return a function to unsubscribe the listener
        const unsubscribe = () => {
            this.events[actionType] = this.events[actionType]
                    .filter((_listener) => _listener !== listener);
        };
        return unsubscribe;
    }

    emit(actionType) {
        // this will be used to notify listners when events of actionType occur
        for (let listner of this.events[actionType])
            listner(this.state);
    }

    dispatch(action) {
        this.state = this.reducer(undefined, action);
        this.emit(action.type);
    }
}


export const createStore = (reducer) => new Store(reducer);
