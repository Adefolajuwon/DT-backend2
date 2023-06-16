// const { MongoClient } = require('mongodb');

// // Connection URL
// const url =
// 	'mongodb+srv://juwon:tremothegoat@cluster0.lary7db.mongodb.net/?retryWrites=true&w=majority';

// // Database Name
// // const dbName = 'your_database_name';

// // Create a new MongoClient
// const client = new MongoClient(url);

// // Connect to the MongoDB server
// async function startmongod() {
// 	client.connect((err) => {
// 		if (err) {
// 			console.error('Failed to connect to the database:', err);
// 			return;
// 		}

// 		console.log('Connected to the database');

// 		client.close();
// 	});
// }
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url =
	'mongodb+srv://juwon:tremothegoat@cluster0.lary7db.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

async function startmongod() {
	// Use connect method to connect to the server
	await client.connect();
	console.log('Connected successfully to server');
	const db = client.db(dbName);
	const collection = db.collection('documents');

	// the following code examples can be pasted here...

	return 'done.';
}

// startmongod()
// 	.then(console.log)
// 	.catch(console.error)
// 	.finally(() => client.close());
module.exports = {
	startmongod,
};
