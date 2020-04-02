'use strict';

require('dotenv').config()

const express = require('express');
const app = express();

const { User } = require('./models');

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/users', (req, res) => {
	User.findAll().then(data => {
		res.send(data);
	})
});

app.post('/users', (req, res) => {
	User.create(req.body).then(data => {
		res.send(data);
	})
});

app.get('/users/:id', (req, res) => {
	User.findByPk(req.params.id).then(data => {
		res.send(data);
	})
});

app.put('/users/:id', (req, res) => {
	User.update(req.body).then(data => {
		res.send(data);
	})
});

app.delete('/users/:id', (req, res) => {
	User.destroy({
		where: { id: req.params.id }
	}).then(data => {
		res.send(data);
	})
});

app.listen(3000)
