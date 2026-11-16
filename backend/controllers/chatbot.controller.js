import axios from 'axios';

const system = `Eres Barista, el amable asistente de CoffeeHouse en Cochabamba. Responde en español, de manera breve. Ayuda sobre café, menú, servicios, horarios y ubicación. No inventes precios o información que no conozcas.`;
export const chat = async (req, res, next) => {
  const { message } = req.body;
  if (typeof message !== 'string' || !message.trim() || message.length > 700) return res.status(400).json({ message: 'Escribe un mensaje de hasta 700 caracteres.' });
  try {
    const response = await axios.post(`${process.env.OLLAMA_URL || 'http://127.0.0.1:11434'}/api/chat`, {
      model: process.env.OLLAMA_MODEL || 'gemma3', stream: false,
      messages: [{ role: 'system', content: system }, { role: 'user', content: message.trim() }]
    }, { timeout: 60000 });
    res.json({ reply: response.data.message.content });
  } catch (error) {
    if (error.code === 'ECONNREFUSED' || error.response?.status === 404) return res.status(503).json({ message: 'El asistente está iniciando. Verifica Ollama y el modelo gemma3.' });
    next(error);
  }
};
