import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../models/Article';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  // articlesOurOffre: Article[];
  // articlesOurOffre: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>(
  //   []
  // );
  // startId: number = 0;
  numberArticles: number = 4;
  ourOffreArticle: Article[] = [];
  
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Article[]>('http://localhost:8000/api/getArticles');
  }

  

  getArticlesOurOffre(startId: number) {
    return this.http
      .get<Article[]>(
        'http://localhost:8000/api/getArticlesOurOffre?startId=' +
          startId +
          '&' +
          'numberArticles=' +
          this.numberArticles
      )
      
  }

  decreaseArticles(articles: BehaviorSubject<Article[]>,startId: BehaviorSubject<number>,isAddButtonDisabled:BehaviorSubject<boolean>, isDecreseButtonDisabled:BehaviorSubject<boolean>) {
    const firstArticlesOurOffre = articles.getValue().slice(0, this.numberArticles);
    articles.next(firstArticlesOurOffre);
    startId.next(firstArticlesOurOffre[this.numberArticles - 1].id);
    isAddButtonDisabled.next(true);
    isDecreseButtonDisabled.next(false);
  }

  addArticles(articles: BehaviorSubject<Article[]>,newArticles: Article[], startId: BehaviorSubject<number>,isAddButtonDisabled:BehaviorSubject<boolean>, isDecreseButtonDisabled:BehaviorSubject<boolean>) {
    const currentArticles = articles.getValue();
    articles.next([...currentArticles, ...newArticles]);
    startId.next(articles.getValue()[articles.getValue().length - 1].id);
    if (newArticles.length < this.numberArticles) {
      isAddButtonDisabled.next(false);
    }
    if (articles.getValue().length > this.numberArticles) {
      isDecreseButtonDisabled.next(true);
    }
  }
    
}
