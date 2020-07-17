import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  hidden: boolean = false;
  title = 'angular9-diplomna';
  constructor(private router: Router, private auth: AngularFireAuth) {
    auth.onAuthStateChanged(user => {
      if (user) {

        this.hidden = true;
      } else {
        this.hidden = false;
      }
    });

  }
  ngAfterViewInit(): void {
    console.log();
  }
}
