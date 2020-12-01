require('env2')('./src/configuration/config.env');
const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const { join } = require('path');
const { createWriteStream } = require('fs');
const router = require('./routes');

const accessFileStream = createWriteStream(
	join(__dirname, 'logs', 'log-file'),
	{
		flags: 'a',
	}
);
const app = express();
app.use(morgan('combined', { stream: accessFileStream }));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public'), { maxAge: '30d' }));
app.set('port', process.env.PORT || 5000);

app.use(router);

console.log('hassan ');
module.exports = app;
