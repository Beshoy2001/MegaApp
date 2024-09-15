import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchsRoutingModule } from './branchs-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BranchsRoutingModule
  ]
})
export class BranchsModule { }
