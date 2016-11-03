const express = require('express');
const router = express.Router();

const Message = require('../models/Message');

router.route('/:id')
   .put((req, res) => {
     Message.findOne({ _id: req.params.id })
     .then((message) => {
       let rating = message.rating;
       rating += 1;
       return Message.FindOneAndUpdate(req.params.id, { $set: { rating } });
     })
     .then(message => res.send(message))
     .catch(err => res.status(400).send(err));
   });

module.exports = router;
