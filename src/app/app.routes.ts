import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';  // Importe o componente de login


export const routes: Routes = [ { path: '', component: LoginComponent  },  // Rota padrão que aponta para Home
    { path: 'home', component: HomeComponent },
    { path: 'cadastro', component: CadastroComponent },];
