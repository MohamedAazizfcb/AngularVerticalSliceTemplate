import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationRepository {
  private apiUrl = 'https://api.example.com/auth';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password });
  }

  signup(username: string, password: string, email: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, { username, password, email });
  }

  forgetPassword(email: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/forget-password`, { email });
  }
}
