import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-shlter-list',
  templateUrl: './shlter-list.component.html',
  styleUrls: ['./shlter-list.component.css']
})
export class ShlterListComponent implements OnInit {
  shelters: Entry<any>[] = [];

  constructor(private router: Router, private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getShelters()
      .then(shelters => this.shelters = shelters);

  }

  goToShelterDetils(shelterID) {
    this.router.navigate(['/shelter', shelterID]);

  }

}
