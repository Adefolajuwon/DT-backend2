const { MongoClient } = require('mongodb');

const url =
	'mongodb+srv://juwon:tremothegoat@cluster0.lary7db.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'myProject';

async function startmongod() {
	const client = new MongoClient(url);

	try {
		await client.connect();
		console.log('Connected successfully to server');

		const db = client.db(dbName);
		const collection = db.collection('documents');

		// Perform any necessary operations with the collection

		return {
			collection, // Include the collection object in the returned value
			message: 'done.',
		};
	} catch (error) {
		console.error('Error:', error);
		throw error;
	} finally {
		// Close the MongoDB client after use
		await client.close();
	}
}

module.exports = {
	startmongod,
};
