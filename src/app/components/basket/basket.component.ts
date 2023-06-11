import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { BasketArticle } from 'src/app/models/BasketArticle';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit{
  isOpenBasket: BehaviorSubject<boolean>;
  basketArticles: Subject<BasketArticle[]>;
  total: Subject<number>;

  constructor(public basketService: BasketService){}

  ngOnInit(): void {
    this.isOpenBasket = this.basketService.isOpenBasket;
    this.basketArticles = this.basketService.basketArticles;
    this.total = this.basketService.total;
  }

 

  onBasket(){
    this.isOpenBasket.next(!this.isOpenBasket.getValue());
    
    // this.basketService.isOpenBasket.next(!this.basketService.isOpenBasket.getValue());
    // console.log(this.basketservice.isOpenBasket.getValue());
  }
}
