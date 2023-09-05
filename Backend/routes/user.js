const express = require('express');
const router = express.Router ();

const userCtrl = require('../controllers/user');

router.post('/sgnup', userCtrl);
router.post('login', userCtrl);

module.exports = router;