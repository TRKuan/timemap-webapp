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
    return (dispatch, getState) => {
        dispatch(getNextEventStart());
        return getNextEventFormAPI(getState().calendar.userId).then((data) => {
            console.log(data);
            dispatch(getNextEventEnd(data));
            dispatch(updateNextEvent());
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
        if(!getState().calendar.nextEvent)return;
        dispatch(updateNextEventStart());
        let {lng, lat, trans} = getState().calendar.nextEvent;
        if(!lng||!lat||!trans||!getState().map.currentPosition)return;
        return getDirectionFormAPI(getState().map.currentPosition, {lng, lat}, trans, getState().map.accessToken).then((data) => {
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
    return (dispatch, getState) => {
        dispatch(getDayEventsStart());
        let {userId, year, month, day} = getState().calendar;
        return getDayFormAPI(userId, year, month, day).then((data) => {
            dispatch(getDayEventsEnd(data));
        });
    };
}

function setMonthAction(month){
    return {
        type: '@CALENDAR/SET_MONTH',
        month
    };
}

export function setMonth(month){
    if(month<1||month>12)return;
    return (dispatch, getState) => {
        dispatch(setMonthAction(month));
        dispatch(updateMonthNumbers(getState().calendar.year, month));
    };
}

function setYearAction(year){
    return {
        type: '@CALENDAR/SET_YEAR',
        year
    };
}

export function setYear(year){
    if(year<0)return;
    return (dispatch, getState) => {
        dispatch(setYearAction(year));
        dispatch(updateMonthNumbers(year, getState().calendar.month));
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
