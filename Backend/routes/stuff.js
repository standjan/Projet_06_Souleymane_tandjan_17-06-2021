const express = require('express')
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const stuffCtrl = require('../controllers/stuff');

router.post('/', auth, multer, stuffCtrl.createThing);

//--------Modifier
router.put('/:id', auth, multer, stuffCtrl.modifyThing);

//--------Supprimer mon thing
  router.delete('/:id', auth, stuffCtrl.deleteThing);

//---------Recuperer un Objet
router.get('/:id', auth, stuffCtrl.getOneThing);

//---------recuperer tout les Objets
router.get('/', auth, stuffCtrl.AllThings);


module.exports = router;