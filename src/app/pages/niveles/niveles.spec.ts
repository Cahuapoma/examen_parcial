import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-niveles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './niveles.html', // o './niveles.component.html' según tu estructura
  styleUrls: ['./niveles.css']   // o './niveles.component.css'
})
export class Niveles {
  // Datos de los niveles según la consigna
  nivelesEstudio = [
    {
      nivel: 'Básico (A1 - A2)',
      duracion: '6 meses',
      descripcion: 'Desarrollo de habilidades elementales para comprender y utilizar expresiones cotidianas y frases sencillas.',
      color: 'border-info'
    },
    {
      nivel: 'Intermedio (B1 - B2)',
      duracion: '8 meses',
      descripcion: 'Capacidad para desenvolverse en la mayoría de situaciones cotidianas y comprender textos complejos.',
      color: 'border-primary'
    },
    {
      nivel: 'Avanzado (C1)',
      duracion: '6 meses',
      descripcion: 'Dominio operativo eficaz del idioma con fluidez y precisión en ámbitos académicos y profesionales.',
      color: 'border-dark'
    }
  ];

  // Modalidades de enseñanza
  modalidades = [
    {
      nombre: 'Presencial',
      icono: 'bi-building',
      descripcion: 'Clases interactivas en nuestros campus equipados con tecnología multimedia.'
    },
    {
      nombre: 'Virtual En Vivo',
      icono: 'bi-laptop',
      descripcion: 'Sesiones sincrónicas a través de videollamada con docentes en tiempo real.'
    },
    {
      nombre: 'Híbrida',
      icono: 'bi-arrow-repeat',
      descripcion: 'Combinación flexible de sesiones teóricas en línea y prácticas presenciales.'
    }
  ];
}