const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  image: { type: String },
  message: { type: String },
  timestamp: { type: Date, default: Date.now() },
  rating: { type: Number, default: 1 },
});

const Message = mongoose.model('messages', messageSchema);

module.exports = Message;
