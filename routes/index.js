var express = require('express');
var router = express.Router();
var contacto = require('../controllers/contacto')

/* GET home page. */
router.get('/', contacto.index); 

router.get('/registroContacto', contacto.registroContacto);
router.get('/respuestaContacto', contacto.respuestaContacto);
router.get('/guardarContacto', contacto.guardarContacto);
module.exports = router;
