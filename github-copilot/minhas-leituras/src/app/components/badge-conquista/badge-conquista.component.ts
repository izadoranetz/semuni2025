import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeituraService } from '../../services/leitura.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-badge-conquista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge-conquista.component.html',
  styleUrls: ['./badge-conquista.component.scss']
})
export class BadgeConquistaComponent {
  readonly META_LIVROS = 10;
  totalConcluidos$: Observable<number>;
  ehMaster$: Observable<boolean>;

  constructor(private leituraService: LeituraService) {
    this.totalConcluidos$ = this.leituraService.obterTotalConcluidos();
    this.ehMaster$ = this.totalConcluidos$.pipe(
      map(total => total >= this.META_LIVROS)
    );
  }
}