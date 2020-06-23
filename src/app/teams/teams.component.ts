import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../service/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.less']
})
export class TeamsComponent implements OnInit {

	teams = {};
	selectTeam = {};
  constructor(private teamService: TeamsService) { }

  ngOnInit(): void {
		this.teams = this.teamService.getTeams();
  }
}
