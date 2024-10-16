import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { CadastroComponent } from './cadastro/cadastro.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, CadastroComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto_aula';
}
bootstrapApplication(AppComponent);

