const mongoose = require('mongoose');

const threadSchema = new mongoose.Schema({
  name: { type: String, minlength: 1 },
  timestamp: { type: Date, default: Date.now() },
  image: { type: String },
  firstMessage: { type: String },
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
});

const Thread = mongoose.model('Thread', threadSchema);

module.exports = Thread;
