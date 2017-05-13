const fs = require('fs');
const uuid = require('uuid/v4');
const moment = require('moment');

function list(searchId = '') {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync('data-events.json')) {
            fs.writeFileSync('data-events.json', '');
        }

        fs.readFile('data-events.json', 'utf8', (err, data) => {
            if (err) reject(err);

            let events = data ? JSON.parse(data) : [];
            if (events.length > 0 && searchId) {
                events = events.filter(p => {
                    return e.id.toLowerCase().indexOf(searchId.toLowerCase()) !== -1
                });
            }
            resolve(events);
        });
    });
}

function create(location, geolocation, ts, endts, allday, title, decription, lable, trans) {
    return new Promise((resolve, reject) => {
        const newEvent = {
            id: uuid(),
            location: location,
            geolocation: geolocation,
            lng: geolocation.lng,
            lat: geolocation.lat,
            ts: ts,
            endts: endts,
            year: new Date(ts).getFullYear(),
            month: new Date(ts).getMonth(),
            day: new Date(ts).getDate(),
            endyear: new Date(endts).getFullYear(),
            endmonth: new Date(endts).getMonth(),
            endday: new Date(endts).getDate(),
            allday: allday,
            title: title,
            decription: decription,
            lable: lable,
            trans: trans
        };

        list().then(events => {
            events = [
                newEvent,
                ...events
            ];
            fs.writeFile('data-events.json', JSON.stringify(events), err => {
                if (err) reject(err);

                resolve(newEvent);
            });
        });
    });
}

function accesstoken() {
  return new Promise((resolve, reject) => {
    resolve(JSON.parse('{"token": "pk.eyJ1IjoidHJrdWFuIiwiYSI6ImNqMXlsYnE1ZjAwdHcyeHJxa3lrYWg2dHcifQ.tBkscd-d-S0Z374VcVw3Qg"}'));
  });
}

function modify(eventId, location, geolocation, ts, endts, allday, title, decription, lable, trans) {
    return new Promise((resolve, reject) => {
        let eventPost = null;
        list().then(events => {
            events = events.map(e => {
                if (e.id === eventId) {
                    eventPost = e;
                    e.location = location;
                    e.geolocation = geolocation;
                    e.lng = geolocation.lng,
                    e.lat = geolocation.lat,
                    e.ts = ts,
                    e.endts = endts,
                    e.year = new Date(ts).getFullYear(),
                    e.month = new Date(ts).getMonth(),
                    e.day = new Date(ts).getDate(),
                    e.endyear = new Date(endts).getFullYear(),
                    e.endmonth = new Date(endts).getMonth(),
                    e.endday = new Date(endts).getDate(),
                    e.allday = allday,
                    e.title = title,
                    e.decription = decription,
                    e.lable = lable,
                    e.trans = trans
                }
                return e;
            });

            fs.writeFile('data-events.json', JSON.stringify(events), err => {
                if (err) reject(err);

                resolve(eventPost);
            });
        });
    });
}

module.exports = {
    list,
    create,
    accesstoken,
    modify
};
