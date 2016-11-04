const express = require('express');
const router = express.Router();

const Thread = require('../models/Thread');
const Message = require('../models/Message');

router.route('/')
  .get((req, res) => {
    Thread.find({})
    .then(allThreads => res.send(allThreads))
    .catch(err => res.status(400).send(err));
  })

  .post((req, res) => {
    console.log('req.body:', req.body);
    Thread.create(req.body)
    .then(thread => Thread.find({}))
    .then(allThreads => res.send(allThreads))
    .catch(err => res.status(400).send(err));
  });

router.route('/:id')
   .get((req, res) => {
     Thread.findOne({ _id: req.params.id })
     .populate('messages')
     .then(thread => res.send(thread))
     .catch(err => res.status(400).send(err));
   })

   .post((req, res) => {
     Message.create(req.body.message)
     .then((message) => {
       const newIdArr = req.body.idArr;
       newIdArr.push(message._id);
       return Thread.findByIdAndUpdate(req.params.id, { $set: { messages: newIdArr } });
     })
     .then(() => Thread.find({}))
     .then(allThreads => res.send(allThreads))
     .catch(err => res.status(400).send(err));
   });

module.exports = router;
