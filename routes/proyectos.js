const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');


// Crea proyectos
// api/proyectos
router.post('/', 
    proyectoController.crearProyecto
);

// Obtener todos los proyectos
router.get('/', 
    proyectoController.obtenerProyectos
)

// Actualizar proyecto via ID
router.put('/:id', 
    proyectoController.actualizarProyecto
);

// Eliminar un Proyecto
router.delete('/:id', 
    proyectoController.eliminarProyecto
);

module.exports = router;