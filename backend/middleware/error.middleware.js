export const notFound = (_req, res) => res.status(404).json({ message: 'Ruta no encontrada.' });
export const errorHandler = (error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ message: 'Ocurrió un error en el servidor.' });
};
