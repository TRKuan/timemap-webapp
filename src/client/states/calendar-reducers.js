const initCalendarState = {
    events:[] //event{id, location, geolocation, date, title, decription, lable, trans}
};

export function calendar(state = initCalendarState, action) {
    let events = null;
    switch (action.type) {
    case '@CALENDAR/ADD_EVENT':
        events = state.events.slice();
        events.push(action.event);
        return {
            ...state,
            events
        };
    case '@CALENDAR/SET_EVENT':
        events = state.events.slice();
        for(let event of events){
            if(action.id === event.id){
                event[action.key] = action.value;
                break;
            }
        }
        return {
            ...state,
            events
        };
    default:
        return state;
    }
}
