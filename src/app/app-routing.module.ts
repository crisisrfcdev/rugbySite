import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { FoundationComponent } from './foundation/foundation.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'foundation', component: FoundationComponent },
  { path: 'contact', component: ContactComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
