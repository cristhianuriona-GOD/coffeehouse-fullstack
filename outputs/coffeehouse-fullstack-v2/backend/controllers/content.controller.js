import { list } from '../models/content.model.js';

const sendList = (table, order) => async (_req, res, next) => {
  try { res.json(await list(table, order)); } catch (error) { next(error); }
};
export const getAbout = async (_req, res, next) => {
  try { res.json((await list('nosotros'))[0] ?? null); } catch (error) { next(error); }
};
export const getServices = sendList('servicios', 'id');
export const getSpecialties = sendList('especialidades', 'id');
export const getPrices = sendList('precios', 'categoria, producto');
