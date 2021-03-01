const express = require('express');
const router = express.Router();
const Persons = require('../controllers/Person.controller');

router.get('/all', (req, res) => Persons.get(req, res));

router.post('/new', (req, res) => Persons.post(req, res));

router.delete('/delete/:id', (req, res) => Persons.delete(req, res));

router.patch('/patch/:id', (req, res) => Persons.patch(req, res));

module.exports = router;