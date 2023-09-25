const express = require('express');
const router = express.router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const stuffCtrl = require('../controllers/stuff');

router.get('/', auth, stuffCtrl.getAllThings);            //---------recuperer tout les Objets
router.post('/', auth, multer, stuffCtrl.createThing);    //---------Envoie des données au serveur
router.get('/:id', auth, stuffCtrl.getOneThing);          //---------Recuperer un Objet
router.put('/:id', auth, multer, stuffCtrl.modifyThing);          //---------Modifier mon thing is here
router.delete('/:id', auth, stuffCtrl.deleteThing);       //---------Supprimer mon thing


module.exports = router;