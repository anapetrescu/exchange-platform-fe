import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AllProductsComponent } from './products/all-products/all-products.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductComponent } from './products/product/product.component';
import { EventsComponent } from './events/events.component';


const routes: Routes = [
  {path:"signup", component:SignupComponent},
  {path:"login", component:LoginComponent},
  {path:"products", component:AllProductsComponent},
  {path:"product/add", component:AddProductComponent},
  {path:"product", component:ProductComponent},
  {path:"events", component:EventsComponent},
  {path:'**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
