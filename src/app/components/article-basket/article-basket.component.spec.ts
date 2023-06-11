import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleBasketComponent } from './article-basket.component';

describe('ArticleBasketComponent', () => {
  let component: ArticleBasketComponent;
  let fixture: ComponentFixture<ArticleBasketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleBasketComponent]
    });
    fixture = TestBed.createComponent(ArticleBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
