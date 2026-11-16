import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from './api.service';
import { About, ChatMessage, Price, Service, Specialty } from './models';

@Component({
  selector: 'app-root', standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html', styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private api = inject(ApiService); private fb = inject(FormBuilder);
  about?: About; services: Service[] = []; specialties: Specialty[] = []; prices: Price[] = [];
  menuOpen = false; chatOpen = false; sending = false; contactStatus = '';
  messages: ChatMessage[] = [{ role: 'bot', content: '¡Hola! Soy Barista. ¿Te ayudo a encontrar tu café ideal?' }];
  contactForm = this.fb.nonNullable.group({ nombre: ['', [Validators.required, Validators.maxLength(100)]], email: ['', [Validators.required, Validators.email]], mensaje: ['', [Validators.required, Validators.maxLength(2000)]] });
  chatForm = this.fb.nonNullable.group({ message: ['', [Validators.required, Validators.maxLength(700)]] });

  ngOnInit(): void {
    this.api.about().subscribe({ next: data => this.about = data });
    this.api.services().subscribe({ next: data => this.services = data });
    this.api.specialties().subscribe({ next: data => this.specialties = data });
    this.api.prices().subscribe({ next: data => this.prices = data });
  }
  scroll(id: string): void { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); this.menuOpen = false; }
  groupedPrices(): { category: string; items: Price[] }[] { return Object.entries(this.prices.reduce<Record<string, Price[]>>((out, item) => ((out[item.categoria] ??= []).push(item), out), {})).map(([category, items]) => ({ category, items })); }
  sendContact(): void {
    if (this.contactForm.invalid) { this.contactForm.markAllAsTouched(); return; }
    this.contactStatus = 'Enviando...';
    this.api.contact(this.contactForm.getRawValue()).subscribe({ next: result => { this.contactStatus = result.message; this.contactForm.reset(); }, error: () => this.contactStatus = 'No pudimos enviar el mensaje. Inténtalo otra vez.' });
  }
  sendChat(): void {
    if (this.chatForm.invalid || this.sending) return;
    const message = this.chatForm.controls.message.value.trim(); this.messages.push({ role: 'user', content: message }); this.chatForm.reset(); this.sending = true;
    this.api.chat(message).subscribe({ next: result => { this.messages.push({ role: 'bot', content: result.reply }); this.sending = false; }, error: error => { this.messages.push({ role: 'bot', content: error.error?.message ?? 'No pude responder ahora. Intenta en un momento.' }); this.sending = false; } });
  }
}
