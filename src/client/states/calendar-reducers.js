const initCalendarState = {
    events:[]
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
