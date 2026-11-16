# CoffeeHouse — Angular + Node.js + MySQL

Aplicación web de una cafetería. El frontend Angular consume únicamente las APIs del backend Node.js; MySQL almacena el contenido, menú y mensajes. Incluye un asistente de IA local con Ollama + Gemma 3.

## Estructura

```
frontend/  # Angular (standalone)
backend/   # Express, MySQL y chatbot Ollama
database/  # esquema y datos iniciales
```

## Puesta en marcha

1. En MySQL ejecute `database/coffeehouse_db.sql`.
2. Copie `backend/.env.example` a `backend/.env` y configure sus credenciales.
3. Ejecute `npm install` dentro de `backend` y luego `npm run dev`.
4. Ejecute `npm install` dentro de `frontend` y luego `npm start`.
5. Abra `http://localhost:4200`.

### Chatbot local

Instale [Ollama](https://ollama.com), descargue el modelo con `ollama pull gemma3` y mantenga Ollama iniciado. El endpoint `POST /api/chatbot` usa `gemma3` configurado en `OLLAMA_MODEL`. Si Ollama no está disponible, la web continúa funcionando e informa que el asistente está temporalmente no disponible.

### APIs

| Método | Ruta | Uso |
|---|---|---|
| GET | `/api/nosotros` | información de la cafetería |
| GET | `/api/servicios` | servicios |
| GET | `/api/especialidades` | bebidas destacadas |
| GET | `/api/precios` | menú y precios |
| POST | `/api/contactos` | guardar contacto |
| POST | `/api/chatbot` | conversar con Gemma 3 |

El hero utiliza un vídeo libre de Pexels. Descárguelo desde la página enlazada en el pie de página como `frontend/src/assets/coffee-hero.mp4` para alojarlo localmente; mientras tanto, la app muestra una imagen de respaldo.

## GitHub

```bash
git init
git add .
git commit -m "feat: coffeehouse angular node mysql"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/coffeehouse.git
git push -u origin main
```
