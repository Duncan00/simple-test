const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', function (req, res) {
	axios({
		url: '/',
		baseURL: 'https://www.google.com',
		method: 'get',
	}).then(response => {
		res.send({
				message: 'OK'
			});
	}).catch(e => {
		if (e.response.status === 404) {
			res.status(404)
				.send({
					message: 'Not Found'
				});
		} else {
			throw e;
		}
	});
});

module.exports = router;
