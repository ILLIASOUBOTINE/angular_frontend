import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id?: number;
  product: Product;
  isQuantity: boolean;
  isLoading: boolean = true;
  
  constructor(private route: ActivatedRoute, private productService: ProductService){}

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.id = +params['id'];
      // console.log(+params['id']);

      this.productService.getProductById(this.id).subscribe({
        next:(product)=>{
          
          if (Object.keys(product).length !== 0 ) {
            // console.log(product);
            this.product = product;
            this.product.quantity? this.isQuantity = true : this.isQuantity = false;
            
          }
          this.isLoading = false;
          // console.log(this.product);
        },
        error:(error)=>{
          console.log(error);
          
        }
      })
    })
  }

}
