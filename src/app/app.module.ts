import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SportsHomepageComponent } from './components/sports-homepage/sports-homepage.component';

import { SportsService } from './services/sports.service';

import { SearchFilterTennisPipe } from './pipes/search-filter-tennis.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SportsHomepageComponent,
    SearchFilterTennisPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SportsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
