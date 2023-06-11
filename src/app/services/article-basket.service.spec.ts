import { TestBed } from '@angular/core/testing';

import { ArticleBasketService } from './article-basket.service';

describe('ArticleBasketService', () => {
  let service: ArticleBasketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleBasketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
