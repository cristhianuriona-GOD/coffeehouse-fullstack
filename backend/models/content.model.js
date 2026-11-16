import { pool } from '../config/database.js';

export const list = async (table, order = 'id') => {
  const [rows] = await pool.query(`SELECT * FROM ${table} ORDER BY ${order}`);
  return rows;
};
