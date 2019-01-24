import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrayerRequestsComponent } from './prayer-requests/prayer-requests.component';

const routes: Routes = [
    // If nothing is typed, you will be redirected to the PrayersComponent
    { path: '', redirectTo: '/prayers', pathMatch: 'full' },
    { path: 'prayers', component: PrayerRequestsComponent },
    // If a random route is describes you will be redirected to '' which will redirect to PrayersComponent
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
