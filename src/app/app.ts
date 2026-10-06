import { Component } from '@angular/core';
import { Comunidad } from './componentes/comunidad/comunidad';
import { Docentes } from './componentes/docentes/docentes';
import { Footer } from './componentes/footer/footer';
import { Nosotros } from './componentes/nosotros/nosotros';
import { Oferta } from './componentes/oferta/oferta';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Comunidad,
    Docentes,
    Footer,
    Nosotros,
    Oferta
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}