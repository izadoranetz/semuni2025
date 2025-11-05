import { Component, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeituraService } from '../../services/leitura.service';
import { Livro } from '../../models/livro.model';

@Component({
  selector: 'app-lista-leituras',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-leituras.component.html',
  styleUrl: './lista-leituras.component.scss'
})
export class ListaLeiturasComponent implements OnInit {
  livros: Livro[] = [];

  constructor(private leituraService: LeituraService) {
    // Observa mudanças no signal para atualizar a lista
    effect(() => {
      const livrosSignal = this.leituraService.getLivrosSignal();
      this.livros = livrosSignal();
    });
  }

  ngOnInit(): void {
    this.carregarLivros();
  }

  private carregarLivros(): void {
    this.livros = this.leituraService.obterLivros();
  }

  onToggleConcluido(livro: Livro): void {
    this.leituraService.marcarComoConcluido(livro.id, !livro.concluido);
  }
}

