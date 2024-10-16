import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';  // Importe o Router


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';


  constructor( private router: Router) { }
  
  onSubmit() {
    console.log('Usuário:', this.username, 'Senha:', this.password);
    alert(`Login efetuado! Usuário: ${this.username}`);
    this.router.navigate(['/home']);
  }

}
