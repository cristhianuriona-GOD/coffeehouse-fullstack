import { pool } from '../config/database.js';

export const createContact = async ({ nombre, email, mensaje }) => {
  const [result] = await pool.execute(
    'INSERT INTO contactos (nombre, email, mensaje) VALUES (?, ?, ?)', [nombre, email, mensaje]
  );
  return result.insertId;
};
