import express from 'express'
import { getScore } from '../controllers/user.js';

const router= express.Router();

router.post('/getscore', getScore);
export default router;