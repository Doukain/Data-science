import { SectionComponent } from './section/section.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  exports: [SectionComponent],
})
export class ArticleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
