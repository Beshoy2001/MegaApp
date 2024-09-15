import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsCategoryRoutingModule } from './products-category-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ProductsCategoryRoutingModule
  ]
})
export class ProductsCategoryModule { }
