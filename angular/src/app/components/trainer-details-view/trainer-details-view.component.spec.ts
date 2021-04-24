import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerDetailsViewComponent } from './trainer-details-view.component';

describe('TrainerDetailsViewComponent', () => {
  let component: TrainerDetailsViewComponent;
  let fixture: ComponentFixture<TrainerDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerDetailsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
