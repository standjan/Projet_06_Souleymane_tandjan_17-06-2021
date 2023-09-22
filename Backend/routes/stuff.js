const express = require('express');
const Router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const stuffCtrl = require('../controllers/stuff');

Router.get('/', auth, stuffCtrl.getAllThings);            //---------recuperer tout les Objets
Router.post('/', auth, multer, stuffCtrl.createThing);    //---------Envoie des données au serveur
Router.get('/:id', auth, stuffCtrl.getOneThing);          //---------Recuperer un Objet
Router.put('/:id', auth, multer, stuffCtrl.modifyThing);          //---------Modifier mon thing is here
Router.delete('/:id', auth, stuffCtrl.deleteThing);       //---------Supprimer mon thing


module.exports = Router;