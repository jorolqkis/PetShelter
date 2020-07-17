import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { PetDetailComponent } from '../pet-detail/pet-detail.component';
import { Tile } from '../../pets';

export interface Tile {
  weight: string;
  cols: number;
  rows: number;
  text: string;
  age: string;
  hasImage?: boolean;
  imageUrl?: string;
}

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css'],
})

export class AdoptComponent implements OnInit {
  breakpoint: any;
  tiles = Tile;
  constructor(public dialog: MatDialog) { }
  openDialog(jivotno) {
    let dialogRef = this.dialog.open(PetDetailComponent, { data: jivotno, width: "700px" });
  };

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 768) ? 2 : 3;
    window.scrollTo(0, 0);
  };
}


