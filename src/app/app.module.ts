import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SportsHomepageComponent } from './components/sports-homepage/sports-homepage.component';

import { SportsService } from './services/sports.service';

@NgModule({
  declarations: [
    AppComponent,
    SportsHomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SportsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
