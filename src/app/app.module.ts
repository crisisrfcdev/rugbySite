import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TeamsComponent } from './teams/teams.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { FoundationComponent } from './foundation/foundation.component';
import { ContactsService } from './service/contacts.service';
import { TeamsService } from './service/teams.service';
import { NewsService } from './service/news.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent,
    TeamsComponent,
    AboutComponent,
    NewsComponent,
    ContactComponent,
    FoundationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
		ContactsService,
		TeamsService,
		NewsService 
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
