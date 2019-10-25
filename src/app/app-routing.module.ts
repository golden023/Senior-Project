import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllComponent } from './all/all.component';
import { EventComponent } from './event/event.component';
import { GiftComponent } from './gift/gift.component';
import { SaleComponent } from './sale/sale.component';
import { UserhomeComponent } from './userhome';
import { MyAccountComponent } from './my-account/my-account.component';
import { KitPageComponent } from './kit-page/kit-page.component';


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
    path: 'my-account',
    component: MyAccountComponent
  },
  {
    path: 'userHome',
    component: UserhomeComponent
  },
  {
    path: 'kitPage/:KitID',
    component: KitPageComponent
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
