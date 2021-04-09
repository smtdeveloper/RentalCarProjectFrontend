import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarUpdateComponent } from './components/car-update/car-update/car-update.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
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
  {path:"rentals/:carId" ,component:RentalAddComponent},
  {path:"payments/:carId" , component:PaymentComponent},
  {path:"rentals/add" , component:RentalAddComponent},
  {path:"cars/add" , component:CarAddComponent , canActivate:[LoginGuard]},
  {path:"cars/update" , component:CarUpdateComponent, canActivate:[LoginGuard] },
  {path:"cars/update/:carId" , component:CarUpdateComponent, canActivate:[LoginGuard]},
  {path:"cars/list" , component:CarListComponent},

  {path:"login" , component:LoginComponent},
  {path:"register" , component:RegisterComponent},
  {path:"payment" , component:PaymentComponent},
  {path:"brands",component:BrandComponent},
  {path:"colors",component:ColorComponent},
  {path:"customers",component:CustomerComponent},
  {path:"rentals",component:RentalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
