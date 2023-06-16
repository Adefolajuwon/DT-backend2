const collection = require('../lib/mongod');

async function createEvent(req, res) {
	try {
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

module.exports = {
	createEvent,
};
