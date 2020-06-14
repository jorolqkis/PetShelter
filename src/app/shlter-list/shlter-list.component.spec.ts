import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShlterListComponent } from './shlter-list.component';

describe('ShlterListComponent', () => {
  let component: ShlterListComponent;
  let fixture: ComponentFixture<ShlterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShlterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShlterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
