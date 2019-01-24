import { NgModule } from "@angular/core";
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '@prayers/material';
import { FormsModule } from '@angular/forms';



@NgModule({
   declarations: [HomeComponent],
   imports: [
       CommonModule,
       HomeRoutingModule,
       MaterialModule,
       FormsModule
    ]
})

export class HomeModule {}