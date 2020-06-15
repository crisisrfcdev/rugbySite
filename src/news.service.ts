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
			'title': 'Spring Season postoneponed!',
			'date': '10/10/2099',
			'imgLink':  '',
			'article': 'The Sping season has been postponed until USA rugby is solvent.  This is completely unrelated to Covid19',
			'byLine': 'me'
		},
		{
			'articleId': 1,
			'title': 'Breaking news story!',
			'date': '10/10/2100',
			'imgLink': '',
			'article': 'The Sping season is back on!',
			'byLine': 'future me'
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
