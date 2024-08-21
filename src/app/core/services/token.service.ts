import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private accessTokenKey = 'accessToken';

  saveAccessToken = (token: string): void => {
    localStorage.setItem(this.accessTokenKey, token);
  }

  getAccessToken = (): string | null => {
    return localStorage.getItem(this.accessTokenKey);
  }

  clearAccessToken = (): void => {
    localStorage.removeItem(this.accessTokenKey);
  }

  isTokenValid = (): boolean => {
    return !!this.getAccessToken();
  }
}
