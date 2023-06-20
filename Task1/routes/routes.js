const { Router } = require('express');
const express = require('express');
const {
	createEvent,
	getEventRecency,
	updateEvent,
	getEventByID,
	deleteEvent,
} = require('../controllers/event');
const router = express.Router();

router.post('/event', createEvent);
router.get('/event', getEventRecency);
router.put('/event', updateEvent);
router.get('/event/:id', getEventByID);
router.delete('/event', deleteEvent);
module.exports = router;
