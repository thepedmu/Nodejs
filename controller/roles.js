const role = require('../models/roles');

exports.getAllroles = (req, resp, next) => {
    role.findAll()
        .then(roles => {
            resp.status(200).json({
                message: 'roles retrieved successfully',
                roles
            });
        })
        .catch(err => {
            console.log(err);
            resp.status(404).json({
                message: 'roles not found'
            });
        })
};


exports.postrole = (req, resp, next) => {
    const rol = req.body.role;

    role.create({
            role: rol
        })
        .then(rol => {
            resp.status(200).json({
                message: 'role created successfully!',
                rol
            });
        })
        .catch(err => {
            console.log(err);
            resp.status(404).json({
                message: 'role creation failed',
            });
        });
};

exports.editrole = (req, resp, next) => {
    const id = req.params.id;
    const rol = req.body.role;

    role.findByPk(id)
        .then(role => {
            role.role = rol;
            return role.save();
        })
        .then(rol => {
            resp.status(200).json({
                message: 'role updated successfully',
                rol
            });
        })
        .catch(err => {
            console.log(err);
            resp.status(404).json({
                message: 'role updation failed',
            });
        });
};

exports.deleterole = (req, resp, next) => {
    const id = req.params.id;

    role.findByPk(id)
        .then(role => {
            return role.destroy();
        })
        .then(() => {
            resp.status(200).json({
                message: 'role deleted successfully',
            });
        })
        .catch(err => {
            console.log(err);
            resp.status(404).json({
                message: 'role deletion failed',
            });
        });
};