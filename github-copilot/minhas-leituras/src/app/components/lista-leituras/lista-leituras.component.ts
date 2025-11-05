import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeituraService } from '../../services/leitura.service';
import { Livro } from '../../models/livro.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-leituras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-leituras.component.html',
  styleUrls: ['./lista-leituras.component.scss']
})
export class ListaLeiturasComponent implements OnInit {
  livros$: Observable<Livro[]>;

  constructor(private leituraService: LeituraService) {
    this.livros$ = this.leituraService.obterLivros();
  }

  ngOnInit(): void {}

  onToggleConcluido(livro: Livro): void {
    this.leituraService.marcarComoConcluido(livro.id, !livro.concluido);
  }
}