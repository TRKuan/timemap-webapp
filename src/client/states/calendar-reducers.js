const initCalendarState = {
    events:[], //event{location, geolocation, date, title, decription, lable, trans}
    transportation: 'walking'
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
    case '@CALENDAR/SET_TRANSPORTATION':
        return {
            ...state,
            transportation: action.trans
        };
    default:
        return state;
    }
}
