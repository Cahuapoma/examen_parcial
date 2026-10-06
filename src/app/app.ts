import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Inicio } from './pages/inicio/inicio';
import { Niveles } from './pages/niveles/niveles';
import { Informacion } from './components/informacion/informacion';
import { ValorAgregado } from './components/valor-agregado/valor-agregado';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Inicio,
    Niveles,
    Informacion,
    ValorAgregado
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}