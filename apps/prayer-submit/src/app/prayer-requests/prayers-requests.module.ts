import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@prayers/material';
import { PrayerRequestListComponent } from './prayer-request-list/prayer-request-list.component';
import { PrayerRequestDetailsComponent } from './prayer-request-details/prayer-request-details.component';
import { PrayerRequestsRoutingModule } from './prayer-requests-routing.module';
import { PrayerRequestsComponent } from './prayer-requests.component';

@NgModule({
  declarations: [
    PrayerRequestsComponent,
    PrayerRequestListComponent,
    PrayerRequestDetailsComponent
  ],
  imports: [
    CommonModule,
    PrayerRequestsRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class PrayersRequestsModule {}
