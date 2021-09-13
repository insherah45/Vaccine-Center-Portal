import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddCenterComponent } from './form-add-center.component';

describe('FormAddCenterComponent', () => {
  let component: FormAddCenterComponent;
  let fixture: ComponentFixture<FormAddCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
