const express = require('express');
const validate = require('express-validation');
const roleController = require('../controller/roles');
const { authorize } = require("../middleware/authorization.middlware");
const {
    postRoleBodySchema,
    editRoleBodySchema
} = require('../validation/joiRequestValidation');

const router = express.Router();

// GET => /roles
router.get('/',authorize, roleController.getAllroles);

// GET => /roles/id
// router.get('/:id', roleController.getrole);

// POST => /roles
router.post('/',authorize , validate(postRoleBodySchema), roleController.postrole);

// PUT => /roles/id
router.put('/:id', authorize,  validate(editRoleBodySchema), roleController.editrole);

// DELETE => /roles/id
router.delete('/:id',authorize, roleController.deleterole);

module.exports = router;