import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
    loginForm: FormGroup;
    loginError: string;

    constructor(private auth: AuthService, fb: FormBuilder) {
        this.loginForm = fb.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        });
    }

    ngOnInit() {
    }

    // Método de registro:
    registro(value) {
        this.auth.signInWithEmail(value)
            .then(res => {
                console.log(res);
            }, err => {
                console.log(err);
                error => this.loginError = error.message;
            });


    }
 }





