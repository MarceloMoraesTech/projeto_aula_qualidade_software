import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Importe o Router
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  usuarioInvalido?: boolean = false;


  constructor( private router: Router) { }
  
  onSubmit() {
    if(this.username == 'usuario_teste' && this.password == 'senha_teste'){
      this.router.navigate(['/home']);
    } else {
      this.usuarioInvalido = true
    }
  }

}
