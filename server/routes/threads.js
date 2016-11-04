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
     let messageId;
     Message.create(req.body)
     .then((message) => {
       messageId = message._id;
       return Thread.findById(req.params.id);
     })
     .then((thread) => {
       thread.messages.push(messageId);
       return thread.save();
     })
     .then(() => Thread.findById(req.params.id).populate('messages'))
     .then(thread => res.send(thread))
     .catch(err => res.status(400).send(err));
   });

module.exports = router;
