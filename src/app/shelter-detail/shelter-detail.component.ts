import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-shelter-detail',
  templateUrl: './shelter-detail.component.html',
  styleUrls: ['./shelter-detail.component.css']
})
export class ShelterDetailComponent implements OnInit {

  shelter: Entry<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentfulService: ContentfulService
  ) { }

  ngOnInit() {
    const shelterId = this.route.snapshot.paramMap.get('id');
    this.contentfulService.getShelter(shelterId)
      .then((shelter) => {

        this.shelter = shelter;

      });
  }

  goToList() {
    this.router.navigate(['/shelters']);
  }

}
