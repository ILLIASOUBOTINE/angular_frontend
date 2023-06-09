import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../models/Article';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  isOpenBasket = new BehaviorSubject<boolean>(false);
  basketArticles = new BehaviorSubject<Article[]>([]);

  constructor() { }

  deleteArticle(id:number){
    const articles = this.basketArticles.getValue();
    const index = articles.findIndex((article)=>{return article.id == id});
    articles.splice(index,1);
    this.basketArticles.next(articles);
  }
}
