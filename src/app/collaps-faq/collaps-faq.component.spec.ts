import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsFaqComponent } from './collaps-faq.component';

describe('CollapsFaqComponent', () => {
  let component: CollapsFaqComponent;
  let fixture: ComponentFixture<CollapsFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapsFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
