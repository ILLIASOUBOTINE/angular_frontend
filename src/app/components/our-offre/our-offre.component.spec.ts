import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurOffreComponent } from './our-offre.component';

describe('OurOffreComponent', () => {
  let component: OurOffreComponent;
  let fixture: ComponentFixture<OurOffreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurOffreComponent]
    });
    fixture = TestBed.createComponent(OurOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
