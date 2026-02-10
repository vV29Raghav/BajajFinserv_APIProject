import express from 'express';
import { handleBFHL } from '../controllers/bfhlcontroller.js';

const router = express.Router();
router.post('/', handleBFHL);

export default router;
