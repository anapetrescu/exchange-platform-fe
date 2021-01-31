import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor(
        private httpClient: HttpClient,
        private router: Router
    ) {}

    signup(data): Observable<any> {
        return this.httpClient.post('https://shielded-eyrie-39447.herokuapp.com/api/users/register', data);
    }

    login(data): Observable<any> {
        return this.httpClient.post('https://shielded-eyrie-39447.herokuapp.com/login', 
        data,
        {observe: 'response' as 'body'});
    }


  getAllUsers(): Observable<any> {
        return this.httpClient.get("https://shielded-eyrie-39447.herokuapp.com/api/users/all")
    }
    
}
