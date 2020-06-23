import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class TeamsService {
	teams = [
		{
			'name': 'Capital Area Crisis',
			'shortName': 'Crisis RFC',
			'bio': 'The Capital Area Crisis Rugby Football Club was founded in Lansing, MI in 2013 by a handful of former Michigan State Players and other ruggers who had moved to the area. Since then the Crisis has grown to include rugby players from all over the country and world who now reside in the mid-Michigan area and want to continue to be a part of the great sport of rugby. The Crisis also partners with the Capital Area Rugby foundation to help them facilitate youth clinics and help grow the sport of rugby in Michigan. Since 2013 the team has grown and developed a lot, in the last few years. Winning the Division 4 state title in 2017 and then winning the relegation game in the summer of 2018 to move into Division 3, and being elected to host the Michigan Rugby tournament for the last 3 years and again in 2020.',
			'crest': '/assets/crisis-logo.png',
			'image': '/assets/crisis-team.jpeg',
			'email': 'crisirfc@gmail.com',
			'fb': '',
			'twitter': ''
		}	
	];

  constructor() { }

  getTeams()	{
		return this.teams;
	}
	
	getTeam(name) {
		return this.teams.filter(team => team.name === name);
	}	
}
