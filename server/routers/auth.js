import { login, register } from '../controllers/auth.js';

import express from 'express';
import { body } from 'express-validator';

const router = express.Router();

router.post('/register', body('email').isEmail(), body('password').isLength({ min: 6 }), body('firstName').exists(), body('lastName').exists() , async(req, res) => {
    await register(req, res);
})

router.post('/login', body('email').isEmail(), body('password').isLength({ min: 6 }), async(req, res) => {
    await login(req, res);
})

export default router;