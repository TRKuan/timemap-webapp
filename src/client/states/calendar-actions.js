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
        year: year,
        month: month-1,
        date: 1
    });
    let monthPrev = month - 2;
    if(monthPrev < 0){
      monthPrev = 11;
    }
    let mPrev = moment({
        year: year,
        month: monthPrev,
        date: 1
    });
    var firstDay = m.day();
    var firstDayPrev = mPrev.daysInMonth() - firstDay;
    let i = 0;
    let j = 0;
    let k = 0;
    for(;i < 42;i++){
      if(i < firstDay){
        firstDayPrev++;
        monthNumbers[i]={date: firstDayPrev, notThisMonth: true};
      }else if(i<m.daysInMonth() + firstDay){
        monthNumbers[k+firstDay]={date: k+1, notThisMonth: false};
        k++;
      }else{
        j++;
        monthNumbers[i]={date: j, notThisMonth: true};
      }
    }
    return {
        type: '@CALENDAR/UPDATE_MONTH_NUMBERS',
        monthNumbers
    };
}
