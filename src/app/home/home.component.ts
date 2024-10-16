import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userData: any = null;

  constructor() {
    // Obtém os dados do localStorage (simulando persistência dos dados)
    const storedData = localStorage.getItem('cadastroData');
    if (storedData) {
      this.userData = JSON.parse(storedData);
    }
  }

}
