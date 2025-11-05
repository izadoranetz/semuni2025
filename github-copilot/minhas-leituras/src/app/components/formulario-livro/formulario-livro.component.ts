import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LeituraService } from '../../services/leitura.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-livro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-livro.component.html',
  styleUrls: ['./formulario-livro.component.scss']
})
export class FormularioLivroComponent {
  formularioLivro: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private leituraService: LeituraService
  ) {
    this.formularioLivro = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      autor: ['', [Validators.required]],
      paginasLidas: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    if (this.formularioLivro.valid) {
      this.leituraService.adicionarLivro(this.formularioLivro.value);
      this.formularioLivro.reset({ paginasLidas: 0 });
    }
  }
}