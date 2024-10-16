import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';  // Importe o arquivo de rotas

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)  // Passa as rotas para o provedor
  ]
});
