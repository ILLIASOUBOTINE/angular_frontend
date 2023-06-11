import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { BasketArticle } from '../models/BasketArticle';
import { Article } from '../models/Article';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  isOpenBasket = new BehaviorSubject<boolean>(false);
  basketArticles = new BehaviorSubject<BasketArticle[]>([]);
  total = new BehaviorSubject<number>(0);

  constructor() { 
    const basket = localStorage.getItem('basket');
    
    if (basket) {
      this.basketArticles.next(JSON.parse(basket));
      this.total.next(this.getTotal());
    } 
    console.log(this.basketArticles);
  }

  deleteArticle(index:number){
    const articles = this.basketArticles.getValue();
    // const index = articles.findIndex((article)=>{return article.id == id});
    articles.splice(index,1);
    this.saveInlocalStorage();
    // this.basketArticles.next(articles);
    this.total.next(this.getTotal());
  }

  addArticle(obj: any){
    const newArticles = this.basketArticles.getValue();
    if (!newArticles.find((article)=>{return article.id == obj.id})) {
      const article = new BasketArticle();
      article.parseProductToArticle(obj);
      article.quantityBasket = 1;
      console.log(article);
      newArticles.push(article);
      // this.basketArticles.next(newArticles);
      // localStorage.setItem('basket', JSON.stringify(newArticles));
      this.saveInlocalStorage();
      this.total.next(this.getTotal());
    } 
  }

  addQuantityBasketArticle(index: number){
    const articles = this.basketArticles.getValue();
    if (articles[index].quantityBasket <= articles[index].quantity) {
      articles[index].quantityBasket++;
      this.saveInlocalStorage();
      this.total.next(this.getTotal());
      return true;
    }else {
      return false;
    }
  }

  decreaseQuantityBasketArticle(index: number){
    const articles = this.basketArticles.getValue();
    if (articles[index].quantityBasket > 0) {
      articles[index].quantityBasket--;
      this.saveInlocalStorage();
      this.total.next(this.getTotal());
      return true;
    }else {
      this.deleteArticle(index);
      return false;
    }
    
  }

  saveInlocalStorage() {
    localStorage.setItem('basket', JSON.stringify(this.basketArticles.getValue()));
  }

  getTotal(){
     const value = this.basketArticles.getValue().reduce((prev, article)=>{
      return article.price*article.quantityBasket + prev;
    },0);
    console.log(value);
    
    return value;
  }

}
