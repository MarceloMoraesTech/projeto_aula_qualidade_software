import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeService, Usuario } from './home.service';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  usuarioValido: boolean = true;
  usuarios: Usuario[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.homeService.getAll().subscribe({
      next: (data) => {
        this.usuarios = data;
        console.log('Dados recebidos:', this.usuarios);
      },
      error: (err) => {
        console.error('Erro ao buscar usuários:', err);
      }
    });
  }
}



