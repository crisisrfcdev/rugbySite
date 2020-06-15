import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
	articles = {};
  constructor(private news: NewsService) { }

  ngOnInit(): void {
		this.articles = this.news.getNews();
  }
}
