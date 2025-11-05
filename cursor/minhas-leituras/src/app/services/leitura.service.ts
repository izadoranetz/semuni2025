import { Injectable, signal, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Livro } from '../models/livro.model';

@Injectable({
  providedIn: 'root'
})
export class LeituraService {
  private readonly STORAGE_KEY = 'livrosLidos';
  private livros = signal<Livro[]>([]);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.carregarLivros();
    }
  }

  private carregarLivros(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    try {
      const livrosSalvos = localStorage.getItem(this.STORAGE_KEY);
      if (livrosSalvos) {
        const livros = JSON.parse(livrosSalvos) as Livro[];
        this.livros.set(livros);
      } else {
        const livrosPadrao: Livro[] = [
            {
                id: 1,
                titulo: 'A Cabeça do Santo',
                autor: 'Socorro Acioli',
                paginasLidas: 50,
                concluido: false
            },
            {
                id: 2,
                titulo: 'Os Despossuídos',
                autor: 'Ursula K. Le Guin',
                paginasLidas: 120,
                concluido: false
            },
            {
                id: 3,
                titulo: 'Fim',
                autor: 'Fernanda Torres',
                paginasLidas: 10,
                concluido: false
            },
            {
                id: 4,
                titulo: 'Amanhã, amanhã, e ainda outro amanhã',
                autor: 'Gabrielle Zevin',
                paginasLidas: 20,
                concluido: false
            },
            {
                id: 5,
                titulo: 'Pigmento',
                autor: 'Aline Zouvi',
                paginasLidas: 10,
                concluido: false
            },
            {
                id: 6,
                titulo: 'O avesso da pele',
                autor: 'Jeferson Tenório',
                paginasLidas: 10,
                concluido: false
            },
            {
                id: 7,
                titulo: 'A Vida não é útil',
                autor: 'Ailton Krenak',
                paginasLidas: 40,
                concluido: false
            },
            {
                id: 8,
                titulo: 'Querida Konbini',
                autor: 'Sayaka Murata',
                paginasLidas: 10,
                concluido: false
            },
            {
                id: 9,
                titulo: 'A Vegetariana',
                autor: 'Han Kang',
                paginasLidas: 40,
                concluido: false
            }

        ]
        this.livros.set(livrosPadrao);
      }
    } catch (error) {
      console.error('Erro ao carregar livros do Local Storage:', error);
      this.livros.set([]);
    }
  }

  private salvarLivros(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.livros()));
    } catch (error) {
      console.error('Erro ao salvar livros no Local Storage:', error);
    }
  }

  adicionarLivro(livro: Livro): void {
    if (livro.paginasLidas < 0) {
      throw new Error('Páginas lidas deve ser maior ou igual a 0');
    }

    const livrosAtuais = this.livros();
    this.livros.set([...livrosAtuais, livro]);
    this.salvarLivros();
  }

  obterLivros(): Livro[] {
    return this.livros();
  }

  marcarComoConcluido(id: string | number, status: boolean): void {
    const livrosAtuais = this.livros();
    const livrosAtualizados = livrosAtuais.map((livro: Livro) =>
      livro.id === id ? { ...livro, concluido: status } : livro
    );
    this.livros.set(livrosAtualizados);
    this.salvarLivros();
  }

  obterTotalConcluidos(): number {
    return this.livros().filter((livro: Livro) => livro.concluido).length;
  }

  // Método auxiliar para obter o signal (para reatividade)
  getLivrosSignal() {
    return this.livros.asReadonly();
  }
}

