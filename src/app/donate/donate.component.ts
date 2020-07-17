import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {



  donations: Observable<any[]>;
  amount: Observable<any[]>;


  donateForm: FormGroup;
  firstNameCtr: FormControl;
  lastNameCtr: FormControl;
  addressCtr: FormControl;
  phoneCtr: FormControl;
  emailCtr: FormControl;
  noteCtr: FormControl;



  yourDonationForm: FormGroup;
  donateCtr: FormControl;
  cardCtr: FormControl;
  dataCtr: FormControl;
  cvvCtr: FormControl;



  firstName: any;
  lastName: any;
  address: any;
  phone: any;
  email: any;
  note: any;


  donate: any;
  card: any;
  data: any;
  cvv: any;
  constructor(private fb: FormBuilder, private db: AngularFirestore) {

    this.donations = db.collection('donations').valueChanges();
    this.amount = db.collection('amount').valueChanges();
  }

  ngOnInit() {

    this.firstNameCtr = new FormControl('', Validators.required);
    this.lastNameCtr = new FormControl('');
    this.addressCtr = new FormControl('', Validators.required);
    this.phoneCtr = new FormControl('', Validators.required);
    this.emailCtr = new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]);
    this.noteCtr = new FormControl('');


    this.donateCtr = new FormControl('', Validators.required);
    this.cardCtr = new FormControl('', [Validators.required, Validators.maxLength(15)]);
    this.dataCtr = new FormControl('', Validators.required);
    this.cvvCtr = new FormControl('', [Validators.required, Validators.maxLength(3)]);


    this.donateForm = this.fb.group({

      firstName: this.firstNameCtr,
      lastName: this.lastNameCtr,
      address: this.addressCtr,
      phone: this.phoneCtr,
      email: this.emailCtr,
      note: this.noteCtr,

    });

    this.yourDonationForm = this.fb.group({

      donate: this.donateCtr,
      card: this.cardCtr,
      data: this.dataCtr,
      cvv: this.cvvCtr,


    });
    window.scrollTo(0, 0);
  }

  onSubmit() {
    this.firstName = this.donateForm.value.firstName;
    this.lastName = this.donateForm.value.lastName;
    this.address = this.donateForm.value.address;
    this.phone = this.donateForm.value.phone;
    this.email = this.donateForm.value.email;
    this.note = this.donateForm.value.note;

    this.donate = this.yourDonationForm.value.donate;
    this.card = this.yourDonationForm.value.card;
    this.data = this.yourDonationForm.value.data;
    this.cvv = this.yourDonationForm.value.cvv;


    var a = {
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      phone: this.phone,
      email: this.email,
      note: this.note,
      card: this.card

    }
    console.log(a);

    var b = {
      donator: this.firstName,
      donate: this.donate,
      card: this.card,
      data: this.data,
      cvv: this.cvv,


    }



    this.db.collection("donations").doc(this.firstName + "_" + this.lastName).set(a);
    this.db.collection("amount").doc(this.card).set(b);


    if (this.donateForm.valid) {
      return a;
    }

    if (this.yourDonationForm.valid) {
      return b;
    }
    this.yourDonationForm.reset;

  }
  alert() {
    alert("Our shelter and all the dogs thank you for the donation!");
  }

}
