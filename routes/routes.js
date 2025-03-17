import express from 'express';
import { home } from '../controllers/home.logic.js'
import { about } from '../controllers/about.logic.js';
const router = express.Router();

router.get('/home', home)
router.get('/about', about)

export default router;