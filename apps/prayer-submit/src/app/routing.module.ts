import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrayerRequestsComponent } from './prayer-requests/prayer-requests.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    // If nothing is typed, you will be redirected to the PrayersComponent
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'prayers', component: PrayerRequestsComponent },
    { path: 'home', component: HomeComponent },
    // If a random route is describes you will be redirected to '' which will redirect to PrayersComponent
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
