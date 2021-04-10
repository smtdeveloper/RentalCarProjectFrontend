import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule , ReactiveFormsModule } from "@angular/forms" 
import { BrowserAnimationsModule} from "@angular/platform-browser/animations"


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { NaviComponent } from './components/navi/navi.component';
import { UserComponent } from './components/user/user.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarimageComponent } from './components/carimage/carimage.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { from } from 'rxjs';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { VatWeekPipe } from './pipes/vat-week.pipe';
import { VatMoonPipe } from './pipes/vat-moon.pipe';

import {ToastrModule, ToastrService} from "ngx-toastr";
import { FooterComponent } from './components/footer/footer.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component'
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CarUpdateComponent } from './components/car-update/car-update/car-update.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { ColorListComponent } from './components/color/color-list/color-list.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { FilterComponent } from './components/filter/filter.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    NaviComponent,
    UserComponent,
    CustomerComponent,
    RentalComponent,
    CarimageComponent,
    VatAddedPipe,
    FilterPipePipe,
    CarDetailComponent,
    VatWeekPipe,
    VatMoonPipe,
    FooterComponent,
    PaymentComponent,
    CarAddComponent,
    RentalAddComponent,
    LoginComponent,
    RegisterComponent,
    CarUpdateComponent,
    CarListComponent,
    ColorAddComponent,
    ColorListComponent,
    ColorUpdateComponent,
    BrandAddComponent,
    BrandUpdateComponent,
    BrandListComponent,
    FilterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-top-right"
    })

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
