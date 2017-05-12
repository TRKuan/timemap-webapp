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

module.exports = {
    list,
    create
};
