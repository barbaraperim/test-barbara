import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsPhotoComponent } from './dogs-photo.component';

describe('DogsPhotoComponent', () => {
  let component: DogsPhotoComponent;
  let fixture: ComponentFixture<DogsPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogsPhotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogsPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
