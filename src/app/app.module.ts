import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SaleComponent } from './sale/sale.component';
import { AllComponent } from './all/all.component';
import { EventComponent } from './event/event.component';
import { GiftComponent } from './gift/gift.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SaleComponent,
    AllComponent,
    EventComponent,
    GiftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
