import express from 'express';
import {
    getSingleUser,
    getAllUsers,
    deleteUser,
    editUser
} from '../controllers/user.controller.js';

const router = express.Router();


//All the User routes
router.route('/:userId').get(getSingleUser);
router.route('/getAll').get(getAllUsers);
router.route('/delete/:userId').delete(deleteUser);
router.route('/update/:userId').put(editUser);


export default router;