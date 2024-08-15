import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/shared/configuration/app.config';
import { AppComponent } from './app/core/presentation/app-component/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
