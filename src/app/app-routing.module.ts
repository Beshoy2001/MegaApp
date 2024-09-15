import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' , redirectTo :"branch" , pathMatch:"full"},
  {
    path: 'branch', 
    loadChildren: () => import('./branchs/branchs.module')
    .then(m => m.BranchsModule)
  },
  {
    path: 'product', 
    loadChildren: () => import('./product3/product3.module')
    .then(m => m.Product3Module)
  },
  {
    path: 'product-category', 
    loadChildren: () => import('./products-category/products-category.module')
    .then(m => m.ProductsCategoryModule)
  },
  {
    path: 'product-m-category', 
    loadChildren: () => import('./products-main-category/products-main-category.module')
    .then(m => m.ProductsMainCategoryModule)
  },
  {
    path: 'product-type', 
    loadChildren: () => import('./products-type/products-type.module')
    .then(m => m.ProductsTypeModule)
  },
  {
    path: 'product-unit', 
    loadChildren: () => import('./products-unit/products-unit.module')
    .then(m => m.ProductsUnitModule)
  },
  {
    path: 'stores', 
    loadChildren: () => import('./stores/stores.module')
    .then(m => m.StoresModule)
  },
  {
    path: 'user-accounts', 
    loadChildren: () => import('./user-accounts/user-accounts.module')
    .then(m => m.UserAccountsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
