'use strict';

require('dotenv').config()

const express = require('express');
const app = express();

const { User } = require('./models');
User.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br', password: '123456' });

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.listen(3000)
