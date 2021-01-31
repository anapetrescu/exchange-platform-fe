import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/shared/Utils';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss', '../auth.scss']
})

export class LoginComponent implements OnInit {
     email: string;
     password: string;
     inputsEmpty: boolean;
     invalide: boolean;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit() {
        this.inputsEmpty = true;
        this.invalide = false;
    }

    onChange(event) {
        if (!Utils.isNullOrEmpty(this.email) && !Utils.isNullOrEmpty(this.password)) {
            this.inputsEmpty = false;
        }
    }

    login() {
        const user = {
            email: this.email,
            password: this.password
        };

        this.authService.login(user).subscribe(
            (res) => {
                localStorage.setItem("token", res.headers.get("authorization"))
                localStorage.setItem("user_id", res.body.id)
                this.resetFields(); 
                this.router.navigate(['/products']); },
            (err) => { 
                console.log(err);  
                this.invalide = true; }

        );
    }

    resetFields() {
        this.email = '';
        this.password = '';
        this.invalide = false;
        this.inputsEmpty = true;
    }

    init() {
        
    }
}
