import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonListArticlesComponent } from './button-list-articles.component';

describe('ButtonListArticlesComponent', () => {
  let component: ButtonListArticlesComponent;
  let fixture: ComponentFixture<ButtonListArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonListArticlesComponent]
    });
    fixture = TestBed.createComponent(ButtonListArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
