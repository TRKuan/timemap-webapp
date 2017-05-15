import moment from 'moment';
const initCalendarState = {
    events:[],
    year: moment().year(),
    month: moment().month()+1,
    monthNumbers:[]
};

export function calendar(state = initCalendarState, action) {
    let events = null;
    switch (action.type) {
    case '@CALENDAR/ADD_EVENT_START':
        return {
            ...state
        };
    case '@CALENDAR/ADD_EVENT_END':
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
    case '@CALENDAR/UPDATE_EVENT_INFO_START':
        return {
            ...state
        };
    case '@CALENDAR/UPDATE_EVENT_INFO_END':
        return {
            ...state
        };
    case '@CALENDAR/SET_MONTH':
        return {
            ...state,
            month: action.month
        };
    case '@CALENDAR/SET_YEAR':
        return {
            ...state,
            year: action.year
        };
    case '@CALENDAR/UPDATE_MONTH_NUMBERS':
        return {
            ...state,
            monthNumbers: action.monthNumbers
        };
    default:
        return state;
    }
}
