import { createContact } from '../models/contact.model.js';

export const postContact = async (req, res, next) => {
  const { nombre, email, mensaje } = req.body;
  if (![nombre, email, mensaje].every(value => typeof value === 'string' && value.trim())) {
    return res.status(400).json({ message: 'Nombre, correo y mensaje son obligatorios.' });
  }
  if (!/^\S+@\S+\.\S+$/.test(email) || nombre.length > 100 || email.length > 100 || mensaje.length > 2000) {
    return res.status(400).json({ message: 'Revisa los datos enviados.' });
  }
  try {
    const id = await createContact({ nombre: nombre.trim(), email: email.trim(), mensaje: mensaje.trim() });
    res.status(201).json({ id, message: 'Gracias. Recibimos tu mensaje.' });
  } catch (error) { next(error); }
};
