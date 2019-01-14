import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { HomeComponent } from './home/home.component';
import { PrayerRequestsComponent } from './prayer-requests/prayer-requests.component';
import { PrayerRequestListComponent } from './prayer-requests/prayer-request-list/prayer-request-list.component';
import { PrayerRequestDetailsComponent } from './prayer-requests/prayer-request-details/prayer-request-details.component';
import { MaterialModule } from '@prayers/material';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    PrayerRequestsComponent, 
    PrayerRequestListComponent, 
    PrayerRequestDetailsComponent],
  imports: [
    BrowserModule, 
    NxModule.forRoot(),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}