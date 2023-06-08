import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article?: Article;
  buttonName: string = 'Add';

  ngOnInit(): void {
    if (!this.article.quantity) {
      this.buttonName = 'Ended';
    }
  }
}
