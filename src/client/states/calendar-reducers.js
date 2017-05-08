const initCalendarState = {
    events:[] //event{location, geolocation, date, title, decription, lable, trans}
};

export function calendar(state = initCalendarState, action) {
    switch (action.type) {
    case '@CALENDAR/ADD_EVENT':
        const events = state.events.slice();
        events.push(action.event);
        return {
            ...state,
            events
        };
    default:
        return state;
    }
}
