import express from 'express'
import { checkAnswer, addProblem } from '../controllers/problem.js';

const router= express.Router();

router.post('/check', checkAnswer)
router.post('/addProblem', addProblem)
export default router;