import weConnectReducer from './reducer';

class Store {
    constructor(reducer) {
        this.reducer = weConnectReducer;
        this.events = {}
    }

    after(actionType, listener) {
        // this will be used to subscribe listeners to various actions
        this.events[actionType].push(listener);
    }

    emit(actionType) {
        // this will be used to notify listners when events of actionType occur
        for (let listner of this.events[actionType])
            listner();
    }

    dispatch(action) {
        this.reducer(action);
        this.emit(action.type);
    }
}


events {
    'add_bus': []
}
