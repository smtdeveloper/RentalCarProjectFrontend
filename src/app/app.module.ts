import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from "@angular/forms"


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


  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
