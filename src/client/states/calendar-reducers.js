import moment from 'moment';
import uuid from 'uuid/v4'
const initCalendarState = {
    //userId: Math.floor((Math.random() * 1000000) + 1),
    userId: 662575,
    events: [],
    year: moment().year(),
    month: moment().month()+1,
    pickedDay: moment(),
    monthHasEventList: [],
    monthNumbers: [],
    nextEvent: null,
    dayEvents: []
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
    case '@CALENDAR/GET_NEXT_EVENT_START':
        return{
            ...state
        };
    case '@CALENDAR/GET_NEXT_EVENT_END':
        return{
            ...state,
            nextEvent: action.event
        };
    case '@CALENDAR/UPDATE_NEXT_EVENT_START':
        return {
            ...state
        };
    case '@CALENDAR/UPDATE_NEXT_EVENT_END':
        return {
            ...state,
            nextEvent: action.event
        };
    case '@CALENDAR/GET_MONTH_START':
        return{
            ...state
        }
    case '@CALENDAR/GET_MONTH_END':
        return{
            ...state,
            monthHasEventList: action.hasEventList
        }
    case '@CALENDAR/GET_DAY_EVENTS_START':
        return {
            ...state
        }
    case '@CALENDAR/GET_DAY_EVENTS_END':
        return {
            ...state,
            dayEvents: action.events
        }
    case '@CALENDAR/SET_PICKED_DAY':
        return {
            ...state,
            pickedDay: action.pickedDay
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
