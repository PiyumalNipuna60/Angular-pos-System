import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemComponent } from './item/item.component';
import { PlaceOrderComponent } from './place-order/place-order.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    DashboardComponent,
    ItemComponent,
    PlaceOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
