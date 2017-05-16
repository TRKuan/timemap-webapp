import moment from 'moment';
import {getDirection as getDirectionFormAPI} from 'api/mapboxAPI.js';
import {addEvent as addEventFormAPI,
    getNextEvent as getNextEventFormAPI,
    getDay as getDayFormAPI
} from 'api/calendarAPI.js';
export function addEventStart() {
    return {
        type: '@CALENDAR/ADD_EVENT_START'
    };
}
export function addEventEnd(event) {
    return {
        type: '@CALENDAR/ADD_EVENT_END',
        event
    };
}

export function addEvent(event) {
    return (dispatch, getState) => {
        event.userId = getState().calendar.userId;
        dispatch(addEventStart());
        return addEventFormAPI(event).then((data) => {
            dispatch(addEventEnd(data));
            dispatch(updateEventInfo(data.id));
        }).
        catch(() => {
            console.error("Can't add event to server");
        });
    };
}

export function setEvent(id, key, value) {
    return {
        type: '@CALENDAR/SET_EVENT',
        id,
        key,
        value
    };
}

function getNextEventStart(){
    return {
        type: '@CALENDAR/GET_NEXT_EVENT_START'
    };
}

function getNextEventEnd(event){
    return {
        type: '@CALENDAR/GET_NEXT_EVENT_END',
        event
    };
}

export function getNextEvent(){
    return (dispatch) => {
        dispatch(getNextEventStart());
        return getNextEventFormAPI().then((data) => {
            dispatch(getNextEventEnd(data));
        });
    };
}


function updateNextEventStart(){
    return {
        type: '@CALENDAR/UPDATE_NEXT_EVENT_START'
    };
}

function updateNextEventEnd(event){
    return {
        type: '@CALENDAR/UPDATE_NEXT_EVENT_END',
        event
    };
}

export function updateNextEvent(){
    return (dispatch, getState) => {
        dispatch(updateNextEventStart());
        let {geolocation, trans} = getState().calendar.nextEvent;
        if(!geolocation||!trans)throw Error("can't find event");
        return getDirectionFormAPI(getState().map.currentPosition, geolocation, trans, getState().map.accessToken).then((data) => {
            let event = JSON.parse(JSON.stringify(getState().calendar.nextEvent));
            event.duration = data.duration;
            event.distance = data.distance;
            dispatch(updateNextEventEnd(event));
        });
    };
}

function getDayEventsStart(){
    return {
        type: '@CALENDAR/GET_DAY_EVENTS_START'
    };
}

function getDayEventsEnd(events){
    return {
        type: '@CALENDAR/GET_DAY_EVENTS_END',
        events
    };
}

export function getDayEvents(){
    return (dispatch) => {
        dispatch(getDayEventsStart());
        return getDayFormAPI().then((data) => {
            dispatch(getDayEventsStart(data));
        });
    };
}

export function setMonth(month){
    return {
        type: '@CALENDAR/SET_MONTH',
        month
    };
}

export function setYear(year){
    return {
        type: '@CALENDAR/SET_YEAR',
        year
    };
}

export function updateMonthNumbers(year, month){
    let monthNumbers = [];
    let m = moment({
        year,
        month: month-1,
        date: 1
    });
    var firstDay = m.day();
    for(let i=0;i<m.daysInMonth();i++){
        monthNumbers[i+firstDay]=i+1;
    }
    return {
        type: '@CALENDAR/UPDATE_MONTH_NUMBERS',
        monthNumbers
    };
}
