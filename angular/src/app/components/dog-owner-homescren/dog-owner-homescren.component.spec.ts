import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogOwnerHomescrenComponent } from './dog-owner-homescren.component';

describe('DogOwnerHomescrenComponent', () => {
  let component: DogOwnerHomescrenComponent;
  let fixture: ComponentFixture<DogOwnerHomescrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogOwnerHomescrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogOwnerHomescrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
