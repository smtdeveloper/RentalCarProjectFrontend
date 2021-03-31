import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { brandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {


  brand :Brand[] = [];
  currentBrand : Brand;
  emptyBrand:Brand;
  constructor(private brandService:brandService) { }
 
  ngOnInit(): void {
    this.getBrands();
  }


  getBrands(){
    this.brandService.getCars().subscribe(response => {
      this.brand = response.data
     
    } )
  }

  setCurrentBrand(brand:Brand){

    this.currentBrand = brand;
  }

  clearCurrentBrand() {
    this.currentBrand = this.emptyBrand;
  }
  

  getCurrentBrandClass(brand:Brand){
    if(brand == this.currentBrand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
   }


   getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
   }



}
