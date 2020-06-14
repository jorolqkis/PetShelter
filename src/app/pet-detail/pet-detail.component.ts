import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})


export class PetDetailComponent {


  shelter: Observable<any[]>;
  adoptionForm: FormGroup;
  firstNameCtr: FormControl;
  lastNameCtr: FormControl;
  ageCtr: FormControl;
  cityCtr: FormControl;
  zipCtr: FormControl;
  emailCtr: FormControl;

  firstName: any;
  lastName: any;
  age: any;
  city: any;
  zip: any;
  email: any;


  pet: any;
  close = false;






  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private db: AngularFirestore) {
    this.shelter = db.collection('shelter').valueChanges();
    this.pet = data;

  }


  ngOnInit() {

    this.firstNameCtr = new FormControl('', Validators.required);
    this.lastNameCtr = new FormControl('');
    this.ageCtr = new FormControl('', Validators.required);
    this.cityCtr = new FormControl('', Validators.required);
    this.zipCtr = new FormControl('', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]);
    this.emailCtr = new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]);

    this.adoptionForm = this.fb.group({

      firstName: this.firstNameCtr,
      lastName: this.lastNameCtr,
      age: this.ageCtr,
      city: this.cityCtr,
      zip: this.zipCtr,
      email: this.emailCtr,
    });
  }

  onSubmit() {
    this.firstName = this.adoptionForm.value.firstName;
    this.lastName = this.adoptionForm.value.lastName;
    this.age = this.adoptionForm.value.age;
    this.city = this.adoptionForm.value.city;
    this.zip = this.adoptionForm.value.zip;
    this.email = this.adoptionForm.value.email;



    var a = {
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      city: this.city,
      zip: this.zip,
      email: this.email,
    }


    this.db.collection("shelter").doc(this.firstName + "_" + this.lastName).set(a);


    if (this.adoptionForm.valid) {
      return a;

    }



  }

  alert() {
    alert("Your adoption form was accepted! We will contact you by email or phone number.");
  }

}
