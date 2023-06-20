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
async function getEvent() {
	try {
		const id = req.params._id;
	} catch (error) {}
}
module.exports = {
	createEvent,
};
