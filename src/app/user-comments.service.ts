import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserCommentsService {



  constructor(private firestore: AngularFirestore) { }
  getShelterComments(shelterId) {
    return this.firestore.collection('comments', ref => ref.where("shelterId", "==", shelterId)).snapshotChanges();
  }
  getUsersComments() {
    return this.firestore.collection('comments').snapshotChanges();
  }
  getUser(uid) {
    return this.firestore.collection('users').doc(uid).snapshotChanges();
  }
}
