import { Component, OnInit, Inject } from '@angular/core';
import { UserCommentsService } from 'src/app/user-comments.service';

import { AngularFirestore } from '@angular/fire/firestore';
import { v4 as uuid } from 'uuid';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Entry } from 'contentful';
import { ContentfulService } from '../contentful.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  shelter: Entry<any>;
  commentSection: Observable<any[]>;

  nameCtr: FormControl;
  commentsCtr: FormControl;

  commentForm: FormGroup;
  today: number = Date.now();
  datata: any;

  uuidValue: string;
  name: any;
  comment: any;
  photoURL: any;
  userDoc: any;
  comments: any;
  user: any;
  uid: string;
  displayName: string;
  email: string;
  constructor(private contentfulService: ContentfulService,
    private route: ActivatedRoute,

    private fb: FormBuilder,
    private usersService: UserCommentsService,
    private db: AngularFirestore,
    private auth: AngularFireAuth) {

    let id = this.db.createId();
    auth.onAuthStateChanged(user => {
      if (user) {
        this.user = user;

      }
      else {
        // not logged in
      }
    })

    this.commentSection = db.collection('comments').valueChanges();

  }

  getdate() {
    this.today = this.datata;
    return this.datata;
  }
  ngOnInit() {

    const shelterId = this.route.snapshot.paramMap.get('id');
    this.contentfulService.getShelter(shelterId)
      .then((shelter) => {

        this.shelter = shelter;
        console.log(this.shelter);

        this.usersService.getShelterComments(this.shelter.sys.id).subscribe(data => {
          this.comments = data.map(e => {
            return {
              uid: e.payload.doc.id,
              displayName: e.payload.doc.data()['displayName'],
              comment: e.payload.doc.data()['comment'],
              photoURL: e.payload.doc.data()['photoURL'],


            };
          })
          console.log(this.comments);
        });
      });

    this.commentsCtr = new FormControl('');

    this.commentForm = this.fb.group({

      comment: this.commentsCtr,
    })

  }

  postCommentUser() {
    this.comment = this.commentForm.value.comment;

    var a = {

      udi: this.user.uid,
      displayName: this.user.displayName,
      comment: this.comment,
      shelterId: this.shelter.sys.id,
      photoURL: this.user.photoURL,


    }
    this.getdate();
    this.db.collection("comments").doc(this.user.displayName + " " + uuid()).set(a);
    return a;

  }
}





