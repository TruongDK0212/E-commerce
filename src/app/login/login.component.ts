import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private afAuth: AngularFireAuth) {}

  login() {
    this.afAuth.signInWithRedirect(new firebase.default.auth.GoogleAuthProvider())
  }
}
