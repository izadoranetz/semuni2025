import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BadgeConquistaComponent } from './components/badge-conquista/badge-conquista.component';
import { FormularioLivroComponent } from './components/formulario-livro/formulario-livro.component';
import { ListaLeiturasComponent } from './components/lista-leituras/lista-leituras.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    BadgeConquistaComponent,
    FormularioLivroComponent,
    ListaLeiturasComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
