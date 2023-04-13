import { addFollower, changePassword, editAbout, editDetails, editSocial, fetchFollowers, fetchProf, fetchSocial, fetchUserDetails, login, register, updateImage, updateProf } from '../controllers/auth.js';

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

router.get('/userDetails', jwtVerify, async(req, res) => {
    await fetchUserDetails(req, res);
})

router.post('/updateProfessional', jwtVerify, async (req, res) => {
    await updateProf(req, res)
})

router.get('/fetchProf', jwtVerify, async (req, res) => {
    await fetchProf(req, res);
})

router.post('/updateAbout', jwtVerify, async (req, res) => {
    await editAbout(req, res);
})

router.post('/updateSocial', jwtVerify, async(req, res) => {
    await editSocial(req, res);
})

router.get('/fetchSocial', jwtVerify, async (req, res) => {
    await fetchSocial(req, res);
})

router.get('/fetchFollow', jwtVerify, async(req, res) => {
    await fetchFollowers(req, res);
})

router.post('/addFollow', jwtVerify, async(req, res) => {
    await addFollower(req, res);
})

export default router;