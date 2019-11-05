import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllComponent } from './all/all.component';
import { EventComponent } from './event/event.component';
import { GiftComponent } from './gift/gift.component';
import { SaleComponent } from './sale/sale.component';
import { UserhomeComponent } from './userhome';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { KitPageComponent } from './kit-page/kit-page.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FaqComponent } from './faq/faq.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'all',
    component: AllComponent
  },
  {
    path: 'event',
    component: EventComponent
  },
  {
    path: 'gift',
    component: GiftComponent
  },
  {
    path: 'sale',
    component: SaleComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'userHome',
    component: UserhomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'kitPage/:KitID',
    component: KitPageComponent
  },
  { path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
