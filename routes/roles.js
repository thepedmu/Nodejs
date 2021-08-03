const express = require('express');
const validate = require('express-validation');
const roleController = require('../controller/roles');
const {
    postRoleBodySchema,
    editRoleBodySchema
} = require('../validation/joiRequestValidation');

const router = express.Router();

// GET => /roles
router.get('/', roleController.getAllroles);

// GET => /roles/id
// router.get('/:id', roleController.getrole);

// POST => /roles
router.post('/', validate(postRoleBodySchema), roleController.postrole);

// PUT => /roles/id
router.put('/:id', validate(editRoleBodySchema), roleController.editrole);

// DELETE => /roles/id
router.delete('/:id', roleController.deleterole);

module.exports = router;