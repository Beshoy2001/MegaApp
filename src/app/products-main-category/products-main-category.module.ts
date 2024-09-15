import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsMainCategoryRoutingModule } from './products-main-category-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ProductsMainCategoryRoutingModule
  ]
})
export class ProductsMainCategoryModule { }
