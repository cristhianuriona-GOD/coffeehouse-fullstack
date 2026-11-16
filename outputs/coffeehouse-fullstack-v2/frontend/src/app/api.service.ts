import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { About, Price, Service, Specialty } from './models';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private readonly base = 'http://localhost:3000/api';
  about() { return this.http.get<About>(`${this.base}/nosotros`); }
  services() { return this.http.get<Service[]>(`${this.base}/servicios`); }
  specialties() { return this.http.get<Specialty[]>(`${this.base}/especialidades`); }
  prices() { return this.http.get<Price[]>(`${this.base}/precios`); }
  contact(data: { nombre: string; email: string; mensaje: string }) { return this.http.post<{ message: string }>(`${this.base}/contactos`, data); }
  chat(message: string) { return this.http.post<{ reply: string }>(`${this.base}/chatbot`, { message }); }
}
