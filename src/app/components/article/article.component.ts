import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  buttonName: string = 'Add';

  constructor(private basketService: BasketService){}

  ngOnInit(): void {
    if (!this.article.quantity) {
      this.buttonName = 'Ended';
    }
  }

  onAdd(){
    this.basketService.addArticle(this.article);
  }
}
