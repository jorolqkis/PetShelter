import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import { AuthProvider } from 'ngx-auth-firebaseui';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  hidden: boolean = false;
  providers = AuthProvider;
  constructor(private router: Router) {



  }
  ngOnInit(): void {
  }
  GoToRegister() {

    this.router.navigate(['/reg']);
  }

  GoToProfile() {
    this.router.navigate(['/profile']);
  }
}


