const http = require('http');
const app = require('.');
require('dotenv').config();
const PORT = process.env.SERVER;
const { startmongod } = require('./lib/mongod');

const Port = 3000;
const server = http.createServer(app);

(async function () {
	server.listen(Port, () => {
		console.log(`Server started on PORT ${Port}.....`);
	});
	await startmongod();
})();
