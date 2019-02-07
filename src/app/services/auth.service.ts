import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UsuarioInterface } from '../interfaces/usuario.interface';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';
import * as firebase from 'firebase/app';
import AuthProvider = auth.AuthProvider;

// import Firebase Authentication (optional)
import '@firebase/auth';
// import Firebase Realtime Database (optional)
import '@firebase/database';
// import Cloud Firestore (optional)
import '@firebase/firestore';


@Injectable({
    providedIn: 'root'
})

@Injectable()
export class AuthService {
    private user: firebase.User;

    // Constructor:
    constructor(public afAuth: AngularFireAuth) {
        afAuth.authState.subscribe(user => {
            this.user = user;
        });
    }

    // Login con email:
    signInWithEmail(credentials) {
        console.log('Registro con email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    }

    // Método de registro (puesto sólo para testeo):
    signUp(credentials) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    }

    // Coger la autenticación:
    get authenticated(): boolean {
        return this.user !== null;
    }

    // Coger el email:
    getEmail() {
        return this.user && this.user.email;
    }

    // Desconectarse:
    signOut(): Promise<void> {
        return this.afAuth.auth.signOut();
    }

    // Conectarse con google:
    signInWithGoogle() {
        console.log('Registro con google.');
        return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
    }

    // Conectarse con email y contraseña:
    private oauthSignIn(provider: AuthProvider) {
        if (!(<any>window).cordova) {
            return this.afAuth.auth.signInWithPopup(provider);
        } else {
            return this.afAuth.auth.signInWithRedirect(provider)
                .then(() => {
                    return this.afAuth.auth.getRedirectResult().then( result => {
                        // Da un token de acceso de Google para acceder a la API:
                        const token = this.auth.getToken();
                        // La información del usuario registrado:
                        const user = result.user;
                        console.log(token, user);
                    }).catch(function(error) {
                        // Errores:
                        alert(error.message);
                    });
                });
        }
    }

}
