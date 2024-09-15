import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsUnitRoutingModule } from './products-unit-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ProductsUnitRoutingModule
  ]
})
export class ProductsUnitModule { }
