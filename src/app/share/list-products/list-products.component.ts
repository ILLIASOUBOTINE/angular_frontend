import {
  AfterViewChecked,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Article } from 'src/app/models/Article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent {
  @Input() title: string = 'Products';
  @Input() articles: Article[];

  // constructor(private articleService: ArticleService) {}

  // ngOnInit(): void {
  //   this.articleService.getArticlesOurOffre().subscribe((articles) => {
  //     this.articleService.articlesOurOffre.next(articles);
  //   });
  // }

  // onAddArticles() {
  //   this.articleService.getArticlesOurOffre().subscribe(() => {});
  // }

  // onDecreaseArticles() {
  //   this.articleService.decreaseArticlesOurOffre();
  // }
}
