
export function addEvent(event) {
    return {
        type: '@CALENDAR/ADD_EVENT',
        event
    };
}

export function setEvent(id, key, value) {
    return {
        type: '@CALENDAR/SET_EVENT',
        event,
        key,
        value
    };
}
