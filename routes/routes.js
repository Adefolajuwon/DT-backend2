const { Router } = require('express');
const express = require('express');
const { createEvent, getEventRecency } = require('../controllers/event');
const router = express.Router();

router.post('/event', createEvent);
router.get('/event', createEvent);

module.exports = router;
