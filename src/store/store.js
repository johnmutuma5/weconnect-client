import { events } from './events';


class Store {
    constructor(reducer) {
        this.reducer = reducer;
        this.events = events
    }

    dispatch(action) {
        this.state = this.reducer(undefined, action);
        this.notify(action.type);
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

    notify(actionType) {
        // this will be used to notify listners when events of actionType occur
        for (let listner of this.events[actionType])
            listner(this.state);
    }
}


export const createStore = (reducer) => new Store(reducer);
