import express from 'express';
import {signIn, signOut} from '../controllers/user.controller.js';

const router = express.Router();


//All the User routes
router.route('/getAll').get(getAllUsers);
router.route('/:userId').get(getSingleUser);
router.route('/delete/:userId').delete(deleteUser);
router.route('/update/:userId').put(editUser);


export default router;