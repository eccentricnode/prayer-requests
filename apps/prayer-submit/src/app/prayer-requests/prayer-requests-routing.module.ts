import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PrayerRequestsComponent } from "./prayer-requests.component";

const routes: Routes = [
    { path: 'prayers', component: PrayerRequestsComponent },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  
  export class PrayerRequestsRoutingModule {}