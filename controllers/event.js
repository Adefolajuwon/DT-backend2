const { startmongod } = require('../lib/mongod');
async function createEvent(req, res) {
	try {
		const { collection, message } = await startmongod();
		const {
			name,
			file,
			tagline,
			schedule,
			description,
			moderator,
			category,
			sub_category,
			rigor_rank,
		} = req.body;

		const event = {
			name,
			file,
			tagline,
			schedule,
			description,
			moderator,
			category,
			sub_category,
			rigor_rank,
		};

		const result = await collection.insertOne(event);
		res.status(200).json({ status: result.insertedId });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to create event.' });
	}
}
async function getEventRecency() {
	try {
		const { type, limit, page } = req.query;

		// Check if the provided query parameters are valid
		if (type !== 'latest' || isNaN(limit) || isNaN(page)) {
			return res.status(400).json({ error: 'Invalid query parameters' });
		}

		// Calculate the start and end index of events based on the limit and page number
		const startIndex = (page - 1) * limit;
		const endIndex = startIndex + parseInt(limit);

		// Retrieve the events based on the calculated indices
		const paginatedEvents = events.slice(startIndex, endIndex);
		res.json(paginatedEvents);
	} catch (error) {
		res.status(404).json({ error });
	}
}
async function updateEvent(req, res) {
	try {
		const { collection, message } = await startmongod();
		const id = req.query;
		const {
			name,
			file,
			tagline,
			schedule,
			description,
			moderator,
			category,
			sub_category,
			rigor_rank,
		} = req.body;

		const event = await collection.findOne(id);

		if (!event) {
			return res.status(404).json({ message: 'Event not found' });
		}

		event.name = name;
		event.file = file;
		event.tagline = tagline;
		event.schedule = schedule;
		event.description = description;
		event.moderator = moderator;
		event.category = category;
		event.sub_category = sub_category;
		event.rigor_rank = rigor_rank;

		await collection.updateOne(id, event);

		res.json(event);
	} catch (error) {
		res.status(501).json(error);
	}
}
async function getEventByID() {
	try {
	} catch (error) {}
}

module.exports = {
	createEvent,
	getEventRecency,
	updateEvent,
};
