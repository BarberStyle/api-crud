// Rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Iniciar sesión
// api/auth
router.post('/', 
    authController.autenticarUsuario
);

// Obtiene el usuario autenticado
router.get('/',
    authController.usuarioAutenticado
);
module.exports = router;