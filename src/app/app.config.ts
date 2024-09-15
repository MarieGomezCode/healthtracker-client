import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Importar HttpClient
import { routes } from './app.routes'; // Asegúrate de que tienes las rutas correctas

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),  // Proporcionar Router para la aplicación
    provideHttpClient()     // Proporcionar HttpClient para toda la aplicación
  ]
};
