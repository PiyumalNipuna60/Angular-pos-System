import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemComponent } from './item/item.component';
import { PlaceOrderComponent } from './place-order/place-order.component';

const routes: Routes = [
  {path:'customer',component:CustomerComponent},
  {path:'',component:DashboardComponent},
  {path:'item',component:ItemComponent},
  {path:'placeOrder',component:PlaceOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
