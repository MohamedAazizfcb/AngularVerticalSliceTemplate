import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { IEnvironmentService } from '../contracts/environment.interface';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService implements IEnvironmentService {
  isProduction(): boolean {
    return environment.production;
  }

  getApiUrl(): string {
    return environment.apiUrl;
  }

  canPerformLogging(): boolean {
    return environment.logging;
  }

  getFeatureFlag(): boolean {
    return environment.featureFlag;
  }
}
