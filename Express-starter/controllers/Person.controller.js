const mongoose = require('mongoose');
const Persons = require('../models/Person.model');

const PersonsController = {};

//GET: find and send all Person documents
PersonsController.get = (req, res) => {
    Persons.find()
        .then(r => res.send(r))
        .catch(e => res.status(500).send('GET error in Persons: ' + e));
};

//POST: save and send the new document input
PersonsController.post = (req, res) => {
    const newPerson = new Persons(req.body);
    newPerson.save()
        .then(r => res.send(r))
        .catch(e => res.status(500).send('POST error in Persons: ' + e));
};

//DELETE: find and delete Persons document by ID
PersonsController.delete = (req, res) => {
    Persons.findById(req.params.id)
        .then(r => Persons.remove(Persons.findById(req.params.id))
                        .then(r1 => res.send(r)))
        .catch(e => res.status(500).send('DELETE error in Persons: ' + e));
};

//PATCH: find and change properties of Persons document by ID
PersonsController.patch = (req, res) => {
    Persons.findById(req.params.id)
        .then(r => {
            Object.keys(req.body).forEach((key, i) => {
                r[key] = req.body[key];
            });
            r.save()
                .then(r => res.send(r));
        }).catch(e => res.status(500).send('PATCH error in Persons: ' + e));
};

module.exports = PersonsController;