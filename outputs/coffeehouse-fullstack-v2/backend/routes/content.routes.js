import { Router } from 'express';
import { getAbout, getPrices, getServices, getSpecialties } from '../controllers/content.controller.js';
const router = Router();
router.get('/nosotros', getAbout);
router.get('/servicios', getServices);
router.get('/especialidades', getSpecialties);
router.get('/precios', getPrices);
export default router;
