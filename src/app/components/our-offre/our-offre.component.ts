import { Component, Input, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from 'src/app/models/Article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-our-offre',
  templateUrl: './our-offre.component.html',
  styleUrls: ['./our-offre.component.scss'],
})
export class OurOffreComponent implements OnDestroy {
  @Input() title: string = 'Products';

  
  articlesOurOffre: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  startId: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  isAddButtonDisabled = new BehaviorSubject<boolean>(true);
  isDecreseButtonDisabled = new BehaviorSubject<boolean>(false);

  constructor(protected articleService: ArticleService) {}

  ngOnInit(): void {
    if (this.articleService.ourOffreArticle.length != 0) {
      this.articlesOurOffre.next(this.articleService.ourOffreArticle);
      this.startId.next(this.articleService.ourOffreArticle.slice(-1)[0].id);
      if (this.articleService.ourOffreArticle.length > this.articleService.numberArticles) {
        this.isDecreseButtonDisabled.next(true);
      }
    }else{
      this.onAddArticles();
    }
  }

  onAddArticles() {
    this.articleService.getArticlesOurOffre(this.startId.getValue()).subscribe((newArticles) => {
      this.articleService.addArticles(this.articlesOurOffre,newArticles,this.startId,this.isAddButtonDisabled, this.isDecreseButtonDisabled);
      
    });
  }

  onDecreaseArticles() {
    this.articleService.decreaseArticles(this.articlesOurOffre,this.startId,this.isAddButtonDisabled, this.isDecreseButtonDisabled);
    
  }

  ngOnDestroy(): void {
    this.articleService.ourOffreArticle = this.articlesOurOffre.getValue();
  }
  
}
