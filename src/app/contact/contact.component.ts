import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  contact: Observable<any[]>;

  contactForm: FormGroup;
  firstNameCtr: FormControl;
  lastNameCtr: FormControl;
  emailCtr: FormControl;
  subjectCtr: FormControl;
  messageCtr: FormControl;

  firstName: any;
  lastName: any;
  email: any;
  subject: any;
  message: any;

  constructor(private fb: FormBuilder, private db: AngularFirestore) {
    this.contact = db.collection('contact').valueChanges();
  }

  ngOnInit() {


    this.firstNameCtr = new FormControl('', Validators.required);
    this.lastNameCtr = new FormControl('');
    this.emailCtr = new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]);
    this.subjectCtr = new FormControl('', Validators.required);
    this.messageCtr = new FormControl('', Validators.required);



    this.contactForm = this.fb.group({

      firstName: this.firstNameCtr,
      lastName: this.lastNameCtr,
      email: this.emailCtr,
      subject: this.subjectCtr,
      message: this.messageCtr,

    });
    window.scrollTo(0, 0);
  }

  onSubmit() {
    this.firstName = this.contactForm.value.firstName;
    this.lastName = this.contactForm.value.lastName;
    this.email = this.contactForm.value.email;
    this.subject = this.contactForm.value.subject;
    this.message = this.contactForm.value.message;

    var a = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      subject: this.subject,
      message: this.message
    }

    this.db.collection("contact").doc(this.firstName + "_" + this.lastName).set(a);

    if (this.contactForm.valid) {
      return a;

    }

  }
  alert() {
    alert("Your message was successfully send and  will be reviewed as soon as possible! Expect and answer shorty on your email");
  }
}
