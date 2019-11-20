import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AccordionModule } from '@syncfusion/ej2-angular-navigations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SaleComponent } from './sale/sale.component';
import { AllComponent } from './all/all.component';
import { EventComponent } from './event/event.component';
import { GiftComponent } from './gift/gift.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './_components/alert.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { KitPageComponent } from './kit-page/kit-page.component';
import { FaqComponent } from './faq/faq.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { CartMainComponent } from './cart/cart-main/cart-main.component';
import { CartItemDetailComponent } from './cart/cart-item-detail/cart-item-detail.component';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckoutMainComponent } from './checkout/checkout-main/checkout-main.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee, fas } from '@fortawesome/free-solid-svg-icons';
import { ReturnsComponent } from './returns/returns.component';
import { VouchersComponent } from './vouchers/vouchers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TrackingComponent } from './tracking/tracking.component';
import { ReturnpolicyComponent } from './returnpolicy/returnpolicy.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsComponent } from './terms/terms.component';
import { ShippinginfoComponent } from './shippinginfo/shippinginfo.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { TailgateComponent } from './tailgate/tailgate.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    AccordionModule,
    RecaptchaModule,
    FontAwesomeModule,
    AccordionModule,
    MatDividerModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SaleComponent,
    AllComponent,
    EventComponent,
    GiftComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    UserhomeComponent,
    KitPageComponent,
    AboutusComponent,
    FaqComponent,
    CartMainComponent,
    CartItemDetailComponent,
    CheckoutMainComponent,
    ReturnsComponent,
    VouchersComponent,
    ContactusComponent,
    TrackingComponent,
    ReturnpolicyComponent,
    PrivacypolicyComponent,
    TermsComponent,
    ShippinginfoComponent,
    BirthdayComponent,
    TailgateComponent,
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faCoffee);
  }


}
