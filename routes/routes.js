const { Router } = require('express');
const express = require('express');
const { createEvent } = require('../controllers/event');
const router = express.Router();

router.post('/event', createEvent);
module.exports = router;
