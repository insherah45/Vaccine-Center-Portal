import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfCentersComponent } from './table-of-centers.component';

describe('TableOfCentersComponent', () => {
  let component: TableOfCentersComponent;
  let fixture: ComponentFixture<TableOfCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableOfCentersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOfCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
