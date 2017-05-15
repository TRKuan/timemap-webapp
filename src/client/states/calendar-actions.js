import moment from 'moment';
import {getDirection as getDirectionFormAPI} from 'api/mapboxAPI.js';
import {addEvent as addEventFormAPI} from 'api/calendarAPI.js';
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
    return (dispatch) => {
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

function updateEventInfoStart(){
    return {
        type: '@CALENDAR/UPDATE_EVENT_INFO_START'
    };
}

function updateEventInfoEnd(){
    return {
        type: '@CALENDAR/UPDATE_EVENT_INFO_START'
    };
}

export function updateEventInfo(id){
    return (dispatch, getstate) => {
        dispatch(updateEventInfoStart());
        let geolocation = null;
        let trans = 'walking';
        for(let event of getstate().calendar.events){
            if(id === event.id){
                geolocation = event.geolocation;
                trans = event.trans;
                break;
            }
        }
        if(!geolocation)throw Error("can't find event");
        if(!trans)trans = 'walking';
        return getDirectionFormAPI(getstate().map.currentPosition, geolocation, trans, getstate().map.accessToken).then((data) => {
            dispatch(setEvent(id, 'duration', data.duration));
            dispatch(setEvent(id, 'distance', data.distance));
            dispatch(updateEventInfoEnd());
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
