import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// Define providers for routing; HttpClient will be added in main.ts
export const appConfig = {
  providers: [provideRouter(routes)],
};
