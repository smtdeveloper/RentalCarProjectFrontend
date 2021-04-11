import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarUpdateComponent } from './components/car-update/car-update/car-update.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { ColorListComponent } from './components/color/color-list/color-list.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [

  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"cars/detail/:carId",component:CarDetailComponent},
  {path:"rentals/:carId" ,component:RentalAddComponent, canActivate:[LoginGuard]},
  {path:"payments/:carId" , component:PaymentComponent, canActivate:[LoginGuard]},
  {path:"rentals/add" , component:RentalAddComponent , canActivate:[LoginGuard]},
  {path:"rentals",component:RentalComponent, canActivate:[LoginGuard]},

  {path:"cars/add" , component:CarAddComponent , canActivate:[LoginGuard]},
  {path:"cars/update" , component:CarUpdateComponent, canActivate:[LoginGuard] },
  {path:"cars/update/:carId" , component:CarUpdateComponent, canActivate:[LoginGuard]},
  {path:"cars/list" , component:CarListComponent, canActivate:[LoginGuard]},

  {path:"colors/add" , component:ColorAddComponent , canActivate:[LoginGuard]},
  {path:"colors/update" , component:ColorUpdateComponent, canActivate:[LoginGuard] },
  {path:"colors/update/:colorId" , component:ColorUpdateComponent, canActivate:[LoginGuard]},
  {path:"colors/list" , component:ColorListComponent, canActivate:[LoginGuard]},

  {path:"brands/add" , component:BrandAddComponent , canActivate:[LoginGuard]},
  {path:"brands/update" , component:BrandUpdateComponent, canActivate:[LoginGuard] },
  {path:"brands/update/:colorId" , component:BrandUpdateComponent, canActivate:[LoginGuard]},
  {path:"brands/list" , component:BrandListComponent, canActivate:[LoginGuard]},

  {path:"login" , component:LoginComponent},
  {path:"register" , component:RegisterComponent},
  {path:"payment/:rental" , component:PaymentComponent},
  {path:"brands",component:BrandComponent},
  {path:"colors",component:ColorComponent},
  {path:"customers",component:CustomerComponent},

  
  {path:"cars/filter/:brandId/:colorId",component:CarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
