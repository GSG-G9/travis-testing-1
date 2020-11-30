const router = require('express').Router();
const { join } = require('path');
const fetch = require('node-fetch');

router.get('/', (req, res) => {
	res.sendFile(join(__dirname, '..', '..', 'public', 'index.html'));
});
console.log('hassan');

router.get('/countries', (req, res) => {
	fetch('https://api.covid19api.com/countries')
		.then((response) => response.json())
		.then((data) => console.log(data));
	res.status(200).send('data');
});

module.exports = router;
