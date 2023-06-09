import { Component, Input } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-article-basket',
  templateUrl: './article-basket.component.html',
  styleUrls: ['./article-basket.component.scss']
})
export class ArticleBasketComponent {
  @Input() article: Article;

  constructor(private basketService: BasketService){}

  onDelete(id:number){
    
    this.basketService.deleteArticle(id);
  }
}
