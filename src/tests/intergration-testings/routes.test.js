/* eslint-disable no-undef */
// eslint-disable-next-line node/no-unpublished-require
const request = require('supertest');
const app = require('../../app');

describe('GET Request', () => {
	test('GET /', (done) => {
		request(app).get('/').expect(200, done);
	});
});
describe('GET Request', () => {
	test('GET /', (done) => {
		request(app).get('/').expect(200, done);
	});
});

describe('GET Request', () => {
	test('GET /', (done) => {
		request(app).get('/').expect(200, done);
	});
});
