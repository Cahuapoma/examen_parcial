import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-niveles',
  styleUrl: './niveles.css',
  templateUrl: './niveles.html',
})
export class Niveles {

niveles = [
    {
      nombre: 'Básico',
      descripcion: 'Aprende vocabulario esencial, gramática básica y conversaciones cotidianas.',
      duracion: '2 ciclos',
      certificado: 'A1 - A2'
    },
    {
      nombre: 'Intermedio',
      descripcion: 'Mejora tu fluidez, comprensión auditiva y redacción de textos.',
      duracion: '2 ciclos',
      certificado: 'B1 - B2'
    },
    {
      nombre: 'Avanzado',
      descripcion: 'Domina el idioma a nivel profesional y académico.',
      duracion: '2 ciclos',
      certificado: 'C1 - C2'
    }
  ];

  modalidades = [
    { nombre: 'Presencial', icono: 'bi-building', descripcion: 'Clases en nuestras instalaciones con interacción directa.' },
    { nombre: 'Virtual', icono: 'bi-laptop', descripcion: 'Clases en vivo por videoconferencia desde cualquier lugar.' },
    { nombre: 'Híbrida', icono: 'bi-arrow-left-right', descripcion: 'Combina lo mejor de lo presencial y lo virtual.' }
  ];
}
