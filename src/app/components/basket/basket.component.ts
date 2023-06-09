import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Article } from 'src/app/models/Article';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit{
  isOpenBasket: Subject<boolean>;
  basketArticles: Subject<Article[]>;

  constructor(public basketService: BasketService){}

  ngOnInit(): void {
    this.isOpenBasket = this.basketService.isOpenBasket;
    this.basketArticles = this.basketService.basketArticles;
  }

  onBasket(){
    this.basketService.isOpenBasket.next(!this.basketService.isOpenBasket.getValue());
    // console.log(this.basketservice.isOpenBasket.getValue());
    
  }
}
