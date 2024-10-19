import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';  // Importe o Router
import { UsuarioService } from '../usuario.service';



@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder,  private router: Router, private usuarioService: UsuarioService) {
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
    // Verifica se existe um usuário a ser editado no estado
    const usuarioEditar = history.state.usuario;
    if (usuarioEditar) {
      this.cadastroForm.patchValue(usuarioEditar);
    }
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      const usuario = this.cadastroForm.value;
      if (usuario.id) {
        this.usuarioService.atualizarUsuario(usuario);
      } else {
        this.usuarioService.salvarUsuario(usuario);
      }
  
      // Redireciona para a home após a operação
      this.router.navigate(['/home']);
    }
  }

  
}
