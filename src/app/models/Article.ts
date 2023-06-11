import { Product } from "./Product";

export class Article{
    id?: number;
    title: string;
    price: number;
    quantity: number;

  

    parseProductToArticle(obj: Product | Article){
        this.id = obj.id;
        this.title = obj.title;
        this.price = obj.price;
        this.quantity = obj.quantity;
    }
}