const express = require('express');
const bodyParser = require('body-parser');

const eventModel = require('../model/events.js');
//const voteModel = require('../model/votes.js');

const router = express.Router();

router.use(bodyParser.json());

// List
router.get('/events', function(req, res) {
    eventModel.list(req.query.searchId).then(events => {
        res.json(events);
    });
});

// Create
router.post('/events', function(req, res) {
    const {location, geolocation, ts, endts, allday, title, decription, lable, trans} = req.body;
    console.log(geolocation);
    if(allday == 0){
      if (!ts || !title ||!endts) {
          const err = new Error('ts and title and endts are required');
          err.status = 400;
          throw err;
      }
    }else if(allday == 1){
      if (!ts || !title) {
          const err = new Error('ts and title are required');
          err.status = 400;
          throw err;
      }
    }
    if(geolocation !== null){
      if(!trans){
        const err = new Error('trans is required');
        err.status = 400;
        throw err;
      }
    }
    eventModel.create(location, geolocation, ts, endts, allday, title, decription, lable, trans).then(event => {
        res.json(event);
    });
});

// Vote
/*router.post('/posts/:id/:mood(clear|clouds|drizzle|rain|thunder|snow|windy)Votes', function(req, res) {
    const {id, mood} = req.params;
    if (!id || !mood) {
        const err = new Error('Post ID and mood are required');
        err.status = 400;
        throw err;
    }
    voteModel.create(id, mood).then(post => {
        res.json(post);
    });
});*/

module.exports = router;
