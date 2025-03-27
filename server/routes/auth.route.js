import express from 'express';
import {signIn, signOut} from '../controllers/auth.controller.js';


const router = express.Router();

router.route('/signIn').post(signIn);
router.route('/signOut').post(signOut);

export default router;