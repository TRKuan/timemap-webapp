const moment = require('moment');
const express = require('express');
const bodyParser = require('body-parser');
//const accessController = require('../middleware/access-controller.js');

const eventModel = require('../model/events.js');
//const voteModel = require('../model/votes.js');

const router = express.Router();

router.use(bodyParser.json());

// List
router.get('/events', function(req, res) {
    const {userId} = req.query;
    eventModel.list(userId).then(events => {
        res.json(events);
    });
});

// Create
router.post('/events', function(req, res) {
    const {userId, location, lng, lat, startTs, endTs, allDay, title, decription, lable, trans} = req.body;
    //console.log(geolocation);
    if(!allDay){
      if (!startTs || !title || !userId || !endTs) {
          const err = new Error('ts and title and endts and userId are required');
          err.status = 400;
          throw err;
      }
    }else if(allDay){
      if (!startTs || !title || !userId) {
          const err = new Error('ts and title and userId are required');
          err.status = 400;
          throw err;
      }
    }
    eventModel.create(userId, location, lng, lat, startTs, endTs, allDay, title, decription, lable, trans).then(event => {
        res.json(event);
    });
});

//AccessToken
router.get('/accesstoken', function(req, res){
  eventModel.accesstoken().then(accesstoken => {
      res.json(accesstoken);
  });
});

// setEvent
router.post('/events/:eventId', function(req, res) {
    const {eventId, userId, location, lng, lat, startTs, endTs, allDay, title, decription, lable, trans} = req.body;
    if(allDay == 0){
      if (!startTs || !title || !userId || !endTs) {
          const err = new Error('ts and title and endts and userId are required');
          err.status = 400;
          throw err;
      }
    }else if(allDay == 1){
      if (!startTs || !title || !userId) {
          const err = new Error('ts and title and userId are required');
          err.status = 400;
          throw err;
      }
    }
    console.log(trans);
    //console.log(geolocation);
    if(lng !== null){
      if(!trans){
        const err = new Error('trans is required');
        err.status = 400;
        throw err;
      }
    }
    eventModel.modify(eventId, userId, location, lng, lat, startTs, endTs, allDay, title, decription, lable, trans).then(event => {
        res.json(event);
    });
});

//getDay
router.get('/day', function(req, res) {
    const {userId, startTime, endTime} = req.query;
    eventModel.day(userId, startTime, endTime).then(events => {
        res.json(events);
    });
});

//getMonth
router.get('/month', function(req, res) {
    const {userId, year, month} = req.query;
    let startTime = moment({year, month: month-1}).format('YYYY-MM-DD HH:mm:ssZZ');
    let endTime = moment({year, month: month-1}).month(month).format('YYYY-MM-DD HH:mm:ssZZ');
    console.log(startTime);
    console.log(endTime);
    eventModel.month(userId, startTime, endTime).then(events => {
        /*console.log(events[0].startDay);
        let array = [];
        let m = moment({
          month: month-1
        }).daysInMonth();
        for (var i = 0; i < m; i++) {
          array[i]=false;
        }
        for (var j = 0; j < events.length; j++){
          array[events[j].startDay-1]=true
        }
        res.json(array);
        console.log(moment(startTime).unix());
        console.log(moment(events[0].startTs).unix());*/
        let array = [];
        let m = moment({
          month: month-1
        }).daysInMonth();
        for (var i = 0; i < m; i++) {
          array[i]=false;
        }
        //console.log(events.length);
        for (var j = 0; j < events.length; j++){
          if(moment(events[j].startTs).unix() < moment(startTime).unix()){
            if(moment(events[j].endTs).unix() < moment(endTime).unix()){
              for (var k = 0; k < events[j].endDay; k++){
                array[k]=true;
              }
            }
            if(moment(events[j].endTs).unix() >= moment(endTime).unix()){
              for (var k = 0; k < m; k++) {
                array[k]=true;
              }
            }
          }
          if(moment(events[j].startTs).unix() >= moment(startTime).unix()){
            if(moment(events[j].endTs).unix() < moment(endTime).unix()){
              for (var k = events[j].startDay-1; k < events[j].endDay; k++){
                array[k]=true;
              }
            }
            if(moment(events[j].endTs).unix() >= moment(endTime).unix()){
              for (var k = events[j].startDay-1; k < m; k++) {
                array[k]=true;
              }
            }
          }
        }
        res.json(array);
    });
});

//getNextEvent
router.get('/nextevent', function(req, res) {
    const {userId} = req.query;
    eventModel.next(userId).then(events => {
        res.json(events);
    });
});

//deleteEvent


module.exports = router;
