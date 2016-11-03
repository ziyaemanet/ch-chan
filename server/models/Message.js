const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  image: { type: String },
  message: { type: String },
  timestamp: { type: Date },
  rating: { type: Number },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
