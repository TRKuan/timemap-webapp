import axios from 'axios';
import moment from 'moment';

const baseUrl = 'http://localhost:8080/api';

export function addEvent(event) {
    let url = `${baseUrl}/events`;

    console.log(`Making POST request to: ${url}`);

    return axios.post(url, {
        ...event
    }).then((res) => {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}
//TODO:haven't test yet
export function setEvent(event, eventID) {
    let url = `${baseUrl}/events/${eventID}`;

    console.log(`Making POST request to: ${url}`);

    return axios.post(url, {
        ...event
    }).then((res) => {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}

export function getDay(userId, year, month, day) {
    let startTime = moment({year, month:month-1, day}).format('YYYY-MM-DDZZ');
    let endTime = moment({year, month:month-1, day});
    endTime = endTime.date(day+1).format('YYYY-MM-DDZZ');
    let url = `${baseUrl}/day?userId=${userId}&startTime=${encodeURIComponent(startTime)}&endTime=${encodeURIComponent(endTime)}`;

    console.log(`Making GET request to: ${url}`);

    return axios.get(url).then((res) => {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}

export function getMonth(userId, year, month) {
    let startTime = moment({year, month:month-1, day: 1}).format('YYYY-MM-DDZZ');
    let endTime = moment({year, month:month-1, day:1 });
    endTime = endTime.month(month).format('YYYY-MM-DDZZ');
    let url = `${baseUrl}/month?userId=${userId}&startTime=${encodeURIComponent(startTime)}&endTime=${encodeURIComponent(endTime)}`;

    console.log(`Making GET request to: ${url}`);

    return axios.get(url).then((res) => {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}

export function getNextEvent(userId) {
    let url = `${baseUrl}/nextevent?userId=${userId}`;

    console.log(`Making GET request to: ${url}`);

    return axios.get(url).then((res) => {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data[0];
    });
}

export function getEvent(userId) {
    let url = `${baseUrl}/events?userId=${userId}`;

    console.log(`Making GET request to: ${url}`);

    return axios.get(url).then((res) => {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}
