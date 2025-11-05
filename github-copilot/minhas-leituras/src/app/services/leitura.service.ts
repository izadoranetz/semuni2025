import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Livro } from '../models/livro.model';

@Injectable({
  providedIn: 'root'
})
export class LeituraService {
  private readonly STORAGE_KEY = 'livrosLidos';
  private livrosSubject = new BehaviorSubject<Livro[]>([]);
  private livrosConcluidos = new BehaviorSubject<number>(0);
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.carregarLivros();
  }

  private carregarLivros(): void {
    let livros: Livro[] = [];
    
    if (this.isBrowser) {
      const livrosArmazenados = window.localStorage.getItem(this.STORAGE_KEY);
      livros = livrosArmazenados ? JSON.parse(livrosArmazenados) : [];
    } else {
               const livrosPadrao: Livro[] = [
            {
                id: '1',
                titulo: 'A Cabeça do Santo',
                autor: 'Socorro Acioli',
                paginasLidas: 50,
                concluido: false
            },
            {
                id: '2',
                titulo: 'Os Despossuídos',
                autor: 'Ursula K. Le Guin',
                paginasLidas: 120,
                concluido: false
            },
            {
                id: '3',
                titulo: 'Fim',
                autor: 'Fernanda Torres',
                paginasLidas: 10,
                concluido: false
            },
            {
                id: '4',
                titulo: 'Amanhã, amanhã, e ainda outro amanhã',
                autor: 'Gabrielle Zevin',
                paginasLidas: 20,
                concluido: false
            },
            {
                id: '5',
                titulo: 'Pigmento',
                autor: 'Aline Zouvi',
                paginasLidas: 10,
                concluido: false
            },
            {
                id: '6',
                titulo: 'O avesso da pele',
                autor: 'Jeferson Tenório',
                paginasLidas: 10,
                concluido: false
            },
            {
                id: '7',
                titulo: 'A Vida não é útil',
                autor: 'Ailton Krenak',
                paginasLidas: 40,
                concluido: false
            },
            {
                id: '8',
                titulo: 'Querida Konbini',
                autor: 'Sayaka Murata',
                paginasLidas: 10,
                concluido: false
            },
            {
                id: '9',
                titulo: 'A Vegetariana',
                autor: 'Han Kang',
                paginasLidas: 40,
                concluido: false
            }

        ]
        this.livrosSubject.next(livrosPadrao);
    }
    
    this.livrosSubject.next(livros);
    this.atualizarTotalConcluidos(livros);
  }

  private salvarLivros(livros: Livro[]): void {
    if (this.isBrowser) {
      window.localStorage.setItem(this.STORAGE_KEY, JSON.stringify(livros));
    }
    this.livrosSubject.next(livros);
    this.atualizarTotalConcluidos(livros);
  }

  private atualizarTotalConcluidos(livros: Livro[]): void {
    const total = livros.filter(livro => livro.concluido).length;
    this.livrosConcluidos.next(total);
  }

  adicionarLivro(livro: Omit<Livro, 'id' | 'concluido'>): void {
    const livros = this.livrosSubject.value;
    const novoLivro: Livro = {
      ...livro,
      id: Date.now().toString(), // Using timestamp as ID
      concluido: false
    };
    this.salvarLivros([...livros, novoLivro]);
  }

  obterLivros(): Observable<Livro[]> {
    return this.livrosSubject.asObservable();
  }

  marcarComoConcluido(id: string, status: boolean): void {
    const livros = this.livrosSubject.value;
    const livrosAtualizados = livros.map(livro => 
      livro.id === id ? { ...livro, concluido: status } : livro
    );
    this.salvarLivros(livrosAtualizados);
  }

  obterTotalConcluidos(): Observable<number> {
    return this.livrosConcluidos.asObservable();
  }
}