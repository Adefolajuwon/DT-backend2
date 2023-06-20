const { Router } = require('express');
const express = require('express');
const {
	createEvent,
	getEventRecency,
	updateEvent,
} = require('../controllers/event');
const router = express.Router();

router.post('/event', createEvent);
router.get('/event', getEventRecency);
router.put('/event', updateEvent);

module.exports = router;
