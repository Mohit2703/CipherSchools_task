import { changePassword, editDetails, login, register, updateImage } from '../controllers/auth.js';

import express from 'express';
import { body } from 'express-validator';
import { jwtVerify } from '../middleware.js';

const router = express.Router();

router.post('/register', body('email').isEmail(), body('password').isLength({ min: 6 }), body('firstName').exists(), body('lastName').exists() , async(req, res) => {
    await register(req, res);
})

router.post('/login', body('email').isEmail(), body('password').isLength({ min: 6 }), async(req, res) => {
    await login(req, res);
})

router.put('/updatePassword', jwtVerify, body('newPassword').isLength({ min: 6 }), async(req, res) => {
    await changePassword(req, res);
})

router.put('/updateUser', jwtVerify, async(req, res) => {
    await editDetails(req, res);
})

router.put('/uploadImage', jwtVerify, async(req, res) => {
    await updateImage(req, res);
});

export default router;