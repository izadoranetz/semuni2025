import { Component } from '@angular/core';
import { FormularioLivroComponent } from './components/formulario-livro/formulario-livro.component';
import { ListaLeiturasComponent } from './components/lista-leituras/lista-leituras.component';
import { BadgeConquistaComponent } from './components/badge-conquista/badge-conquista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormularioLivroComponent,
    ListaLeiturasComponent,
    BadgeConquistaComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
