import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerAddingFormComponent } from './trainer-adding-form.component';

describe('TrainerAddingFormComponent', () => {
  let component: TrainerAddingFormComponent;
  let fixture: ComponentFixture<TrainerAddingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerAddingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerAddingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
