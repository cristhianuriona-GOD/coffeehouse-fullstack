import { Router } from 'express';
import { postContact } from '../controllers/contact.controller.js';
const router = Router();
router.post('/contactos', postContact);
export default router;
