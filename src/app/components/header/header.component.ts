import { Component } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private basketservice: BasketService){}

  onBasket(){
    this.basketservice.isOpenBasket.next(!this.basketservice.isOpenBasket.getValue());
    // console.log(this.basketservice.isOpenBasket.getValue());
    
  }
}
