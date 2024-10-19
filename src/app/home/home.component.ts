import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';  // Importe o Router

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  usuarioValido: boolean = true;
  usuarios: any[] = [];


  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.usuarios = this.usuarioService.obterUsuarios(); // Carrega os usuários ao inicializar a página
  }

  
  // Função para deletar um usuário
  deletarUsuario(email: string): void {
    this.usuarioService.deletarUsuario(email); // Chama o serviço para remover
    this.usuarios = this.usuarioService.obterUsuarios(); // Atualiza a lista após deletar
  }

  // Função para editar um usuário, redireciona para o cadastro com os dados do usuário
  editarUsuario(usuario: any): void {
    this.router.navigate(['/cadastro'], { state: { usuario } }); // Passa o usuário como estado para o componente de cadastro
  }

}



