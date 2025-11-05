import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LeituraService } from '../../services/leitura.service';
import { Livro } from '../../models/livro.model';

@Component({
  selector: 'app-formulario-livro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-livro.component.html',
  styleUrl: './formulario-livro.component.scss'
})
export class FormularioLivroComponent {
  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private leituraService: LeituraService
  ) {
    this.formulario = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(1)]],
      autor: ['', [Validators.required, Validators.minLength(1)]],
      paginasLidas: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    if (this.formulario.valid) {
      const novoLivro: Livro = {
        id: Date.now().toString(),
        titulo: this.formulario.value.titulo,
        autor: this.formulario.value.autor,
        paginasLidas: this.formulario.value.paginasLidas,
        concluido: false
      };

      this.leituraService.adicionarLivro(novoLivro);
      this.formulario.reset({ paginasLidas: 0 });
    }
  }
}

