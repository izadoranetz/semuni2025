import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeituraService } from '../../services/leitura.service';

@Component({
  selector: 'app-badge-conquista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge-conquista.component.html',
  styleUrl: './badge-conquista.component.scss'
})
export class BadgeConquistaComponent implements OnInit {
  totalConcluidos = 0;
  readonly LIMITE_CONQUISTA = 10;

  constructor(private leituraService: LeituraService) {
  }

  ngOnInit(): void {
    this.atualizarTotal();
  }

  private atualizarTotal(): void {
    this.totalConcluidos = this.leituraService.obterTotalConcluidos();
  }

  get isMaster(): boolean {

    return this.totalConcluidos >= this.LIMITE_CONQUISTA;
  }
}

