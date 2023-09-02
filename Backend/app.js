const express = require ('express');
const bodyParser = require('bodyParser');
const mongoose = require('mongoose');

const Thing = require('./models/thing');
const things = require('./models/things');
const { error } = require('console');


mongoose.connect('mongodb+srv://standjan:QJRo8CW5yTjeosUq@cluster0-pme76.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(bodyPrser.json());

  app.post('/api/stuff', (req, res, next) => {
    delete req.body._id;
    const thing = new Thing({
      ...req.body
    });
    thing.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  });
// supprimer mon thnig
app.put('/api/stuff/:id', (req, res, next) => {
  Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
});
//Mettre a jour mon thing
  app.put('/api/stuff/:id', (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
  });
// lecture de mon thing
app.get('/api/stuff/:id', (req, res, next) => {
  Thing.findOne({ _id: req.params.id})
   .then(thing => res.status(200).json(thing))
   .catch(errorn=> res.status(404).json({ error }));
});

app.get('/api/stuff', (req, res, next) => {
Thing.find()
.then(things => res.status(200).json(things))
.catch(error =>res.status(400).json({ error }));
  });

module.exports = app;