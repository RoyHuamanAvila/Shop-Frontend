import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { DeliveryComponent } from './delivery/delivery.component';


const appRoutes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'checkout/basket', component: BasketComponent},
  {path: 'checkout/delivery', component: DeliveryComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    HomeComponent,
    BasketComponent,
    DeliveryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
