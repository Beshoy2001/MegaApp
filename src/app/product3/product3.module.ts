import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product3RoutingModule } from './product3-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    Product3RoutingModule
  ]
})
export class Product3Module { }
