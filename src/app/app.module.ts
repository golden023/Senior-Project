import { BrowserModule } from '@angular/platform-browser';
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
import { CartComponent } from './cart/cart.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee, fas } from '@fortawesome/free-solid-svg-icons';
import { CheckoutComponent } from './checkout/checkout.component';

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
    AccordionModule
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
    CartComponent,
    CheckoutComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faCoffee);
  }


 }
