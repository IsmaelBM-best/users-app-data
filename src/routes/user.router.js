const { getAll, create, getOne, remove, update, verifyCode, getLoggedUser, login } = require('../controllers/user.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT')

const userRouter = express.Router();

userRouter.route('/')
    .get(getAll)
    .post(create)

userRouter.route('/me')
    .get(verifyJWT, getLoggedUser)

userRouter.route('/verify/:code')
    .get(verifyCode)

userRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update)

userRouter.route('/login')
    .post(login)

module.exports = userRouter;