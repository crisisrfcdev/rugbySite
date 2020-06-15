import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class TeamsService {
	teams = [
		{
			'name': 'Capital Area Crisis',
			'shortName': 'CARFC',
			'bio': 'Lorem Ipsom',
			'crestLink': 'assets/',
			'teamImg': 'assets/teampic.jpeg'
			'contactEmail': '',
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
