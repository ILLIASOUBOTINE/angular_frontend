import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-list-articles',
  templateUrl: './button-list-articles.component.html',
  styleUrls: ['./button-list-articles.component.scss']
})
export class ButtonListArticlesComponent {

  @Output() addArticles = new EventEmitter();
  @Output() decreaseArticles = new EventEmitter();
  @Input() isAddButtonDisabled: boolean;
  @Input() isDecreseButtonDisabled: boolean;

  onAddArticles() {
    this.addArticles.emit();
  }

  onDecreaseArticles() {
    this.decreaseArticles.emit();
  }
}
