import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from './product/product.component'
import {ProductDetailsComponent} from './product-details/product-details.component'

const routes: Routes = [
   {path:'product',component:ProductComponent},
  // {path:'product-details',component:ProductDetailsComponent}
  
   {path:'details/:id',component:ProductDetailsComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
