import { AfterViewChecked, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { BasketArticle } from 'src/app/models/BasketArticle';
import { ArticleBasketService } from 'src/app/services/article-basket.service';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-article-basket',
  templateUrl: './article-basket.component.html',
  styleUrls: ['./article-basket.component.scss']
})
export class ArticleBasketComponent  {
  @Input() article: BasketArticle;
  @Input() index: number;

  constructor(private basketService: BasketService){}

  

  onDelete(){
    this.basketService.deleteArticle(this.index);
  }

  onLess(){
    this.basketService.decreaseQuantityBasketArticle(this.index);
  }

  onMore(){
    const isMessage = this.basketService.addQuantityBasketArticle(this.index);

    if (!isMessage) {
      alert('No more product in stock!');
    }
  }


}
