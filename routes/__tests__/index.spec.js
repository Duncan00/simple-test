'use strict';

const supertest = require('supertest');
const nock = require('nock');
const app = require('../../app');

describe('GET /', () => {
	afterEach(async () => {
		nock.cleanAll();
	});

	describe('When third party API responses 200', () => {
		it('should response OK', async () => {
			const scope = nock('https://www.google.com')
				.get('/')
				.once()
				.reply(200);

			const response = await supertest(app).get('/');

			scope.done();
			expect(response.status).toEqual(200);
			expect(response.body).toMatchSnapshot('200 OK');
		});
	});

	describe('When third party API responses 404', () => {
		it('should response message Not Found', async () => {
			const scope = nock('https://www.google.com')
				.get('/')
				.reply(404);

			const response = await supertest(app).get('/');

			// Assert that the expected request was made.
			scope.done();
			expect(response.status).toEqual(404);
			expect(response.body).toMatchSnapshot('404 Not Found');
		});
	});
});
