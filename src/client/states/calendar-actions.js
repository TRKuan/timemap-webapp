
export function addEvent(event) {
    return {
        type: '@CALENDAR/ADD_EVENT',
        event
    };
}

export function setTransportation(trans) {
    return {
        type: '@CALENDAR/SET_TRANSPORTATION',
        trans
    };
}
