const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');
const { check } = require('express-validator');

// crear una tarea
// api/tareas
router.post('/', 

    tareaController.crearTarea
);

// Obtener las tareas por proyecto
router.get('/',
    tareaController.obtenerTareas
);

// Actualizar tarea
router.put('/:id', 
    tareaController.actualizarTarea
);

// Eliminar tarea
router.delete('/:id', 
    tareaController.eliminarTarea
);

module.exports = router;