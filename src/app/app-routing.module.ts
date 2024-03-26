import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"products",loadChildren:()=>import('./products/products.module')
.then(mod=>mod.ProductsModule)},

{path:"Home",loadChildren:()=>import('./home/home.module')
.then(mod=>mod.HomeModule)},
{path:"About",loadChildren:()=>import('./about/about.module')
.then(mod=>mod.AboutModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
