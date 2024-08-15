import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/core/presentation/app-component/app.component';
import { config } from './app/shared/configuration/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
