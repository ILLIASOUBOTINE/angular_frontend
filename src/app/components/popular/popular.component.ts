import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from 'src/app/models/Article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent {
  @Input() title: string = 'Products';
  // @Input() articles: Article[];
  articlesOurOffre: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>(
    []
  );
  startId: number = 0;

  constructor(protected articleService: ArticleService) {}

  ngOnInit(): void {
    this.onAddArticles();
  }

  onAddArticles() {
    this.articleService.getArticlesOurOffre(this.startId).subscribe((articles) => {
      
      const currentArticles = this.articlesOurOffre.getValue();
          this.articlesOurOffre.next([...currentArticles, ...articles]);
          this.startId =
            this.articlesOurOffre.getValue()[
              this.articlesOurOffre.getValue().length - 1
            ].id;
    });
  }

  onDecreaseArticles() {
    const firstArticlesOurOffre = this.articlesOurOffre
      .getValue()
      .slice(0, this.articleService.numberArticles);
    this.articlesOurOffre.next(firstArticlesOurOffre);

    this.startId = firstArticlesOurOffre[this.articleService.numberArticles - 1].id;
  }
}
