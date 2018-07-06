import ResourcesProvider from './ResourcesProvider';
import { registerEvent } from './utils';


class Store {
    constructor(reducer) {
        this.reducer = reducer;
        this.events = {}
    }

    dispatch(action) {
        this.state = this.reducer(this.state, action);
        // notify listeners that this event has occured and updated state
        // eventTypes are identified by action types
        this.notify(action.type);
    }

    after(eventType, listener) {
        // this will be used to subscribe listeners to various actions
        // eventTypes are identified by action types
        // register this eventType: registers only if it has not been registered before
        registerEvent(this.events, eventType);
        this.events[eventType].push(listener);
        // return a function to unsubscribe the listener
        const unsubscribe = () => {
            this.events[eventType] = this.events[eventType]
                    .filter((_listener) => _listener !== listener);
        };
        return unsubscribe;
    }

    subscribe(subscriptions, listener) {
        // subscription to store events return an array of each subscription's
        // revoker
        let subscriptionsRevokers = []
        for(let subscription of subscriptions){
            const unsubscribe = this.after(subscription, listener);
            subscriptionsRevokers.push(unsubscribe);
        }
        return subscriptionsRevokers;
    }

    notify(eventType) {
        // this will be used to notify listners when events of actionType occur
        for (let listner of this.events[eventType])
            listner(this.state);
    }
}


export const createStore = (reducer) => new Store(reducer);
export default ResourcesProvider;
