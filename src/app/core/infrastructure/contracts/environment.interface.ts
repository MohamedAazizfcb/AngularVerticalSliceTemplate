export interface IEnvironmentService {
    isProduction(): boolean;
  
    getApiUrl(): string;
  
    canPerformLogging(): boolean;
  
    getFeatureFlag(): boolean;
}
  