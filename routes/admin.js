import express from 'express'
import { deleteUser, getUsers } from '../controllers/user.js';

const router= express.Router();

router.get('/users', getUsers)
router.post('/delete-user', deleteUser)
export default router;