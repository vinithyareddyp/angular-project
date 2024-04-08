import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';  // Corrected import
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { appConfig } from './app/app.config';  // Assuming appConfig is exported from app.config.ts

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers,
    importProvidersFrom(HttpClientModule),
  ]
}).catch(err => console.error(err));