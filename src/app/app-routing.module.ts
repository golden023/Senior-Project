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
import { CartMainComponent } from './cart/cart-main/cart-main.component';
import { CheckoutMainComponent } from './checkout/checkout-main/checkout-main.component';
import { VouchersComponent } from './vouchers/vouchers.component';
import { ReturnsComponent } from './returns/returns.component';
import { TrackingComponent } from './tracking/tracking.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ShippinginfoComponent } from './shippinginfo/shippinginfo.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { TailgateComponent } from './tailgate/tailgate.component';
import { ReturnpolicyComponent } from './returnpolicy/returnpolicy.component';
import { TermsComponent } from './terms/terms.component';

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
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: 'returns',
    component: ReturnsComponent
  },
  {
    path: 'vouchers',
    component: VouchersComponent
  },
  {
    path: 'tracking',
    component: TrackingComponent
  },
  {
    path: 'shippinginfo',
    component: ShippinginfoComponent
  },
  {
    path: 'privacypolicy',
    component: PrivacypolicyComponent
  },
  {
    path: 'birthday',
    component: BirthdayComponent
  },
  {
    path: 'tailgate',
    component: TailgateComponent
  },
  {
    path: 'returnpolicy',
    component: ReturnpolicyComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'cart',
    component: CartMainComponent
  },
  {
    path: 'checkout',
    component: CheckoutMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
