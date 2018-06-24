
export function registerEvent(events, event, value=[]) {
    Object.defineProperty(
        events,
        event,
        {
            value: value,
            enumerable: true,
            writable: true
        }
    )
}
