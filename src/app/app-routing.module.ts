import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllComponent } from './all/all.component';
import { EventComponent } from './event/event.component';
import { GiftComponent } from './gift/gift.component';
import { SaleComponent } from './sale/sale.component';
import { UserhomeComponent } from './userhome';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'


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
    path: 'add-product',
    component: AddProductComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
