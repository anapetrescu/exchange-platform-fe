import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor(
        private httpClient: HttpClient,
        private router: Router
    ) {}

    signup(data): Observable<any> {
        return this.httpClient.post('http://localhost:3000/api/register', data);
    }

    login(data): Observable<any> {
        return this.httpClient.post('http://localhost:3000/api/login', data);
    }
}
