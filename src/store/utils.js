
export function registerEvent(events, event, value=[]) {
    if(!events.hasOwnProperty(event)) {
        Object.defineProperty(
            events,
            event,
            {
                value: value,
                enumerable: true,
                writable: true
            }
        );
    }
}
