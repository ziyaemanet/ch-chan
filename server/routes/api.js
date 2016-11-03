const express = require('express');
const router = express.Router();

router.use('/messages', require('./messages'));
router.use('/threads', require('./threads'));


module.exports = router;
