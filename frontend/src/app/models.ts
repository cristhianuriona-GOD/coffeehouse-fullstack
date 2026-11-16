export interface About { id: number; historia: string; direccion: string; telefono: string; url_foto_tienda: string; }
export interface Service { id: number; nombre: string; descripcion: string; icono: string; }
export interface Specialty { id: number; nombre: string; descripcion: string; imagen_url: string; }
export interface Price { id: number; producto: string; precio: number; categoria: string; }
export interface ChatMessage { role: 'user' | 'bot'; content: string; }
