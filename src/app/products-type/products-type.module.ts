import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsTypeRoutingModule } from './products-type-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ProductsTypeRoutingModule
  ]
})
export class ProductsTypeModule { }
