import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

	news = [
//		{
//			'articleId': 3
//			'title': '',
//			'date': '',
//			'imgLink':  '',
//			'article': '',
//			'byLine': ''
//		},
		{
			'articleId': 2,
			'subject': 'Crisis RFC',
			'title': 'Summer Conditioning',
			'date': '6/23/2020',
			'imgLink':  '',
			'article': 'Crisis RFC Summer optional conditioning is occurring Tuesdays and Thursdays at St. Joe Park. All exercises will be according to social distancing guidelines.',
			'byLine': 'Matt Foley'
		},
		{
			'articleId': 1,
			'subject': 'Crisis RFC',
			'title': 'Covid19 suspends Spring season',
			'date': '5/1/2020',
			'imgLink': '',
			'article': 'Due to Covid19, the Spring rugby season is suspended. There will be no rugby events until Covid19 guidance allows.',
			'byLine': 'Matt Foley'
		}
	];

	getMostRecentUpdate() {
		return this.news.reduce((prev, current) => (+prev.articleId > +current.articleId) ? prev : current)
	}

	getNews() {
		return this.news;
	}

	getArticle(title) {
		return this.news.filter(article => article.title === title);
	}
}
