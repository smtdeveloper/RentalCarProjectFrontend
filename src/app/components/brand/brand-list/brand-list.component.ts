import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { brandService } from 'src/app/services/brand.service';
@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands : Brand[] = [];
  constructor(
    private brandService : brandService,
    private toastrService:ToastrService
    ){ }

  ngOnInit(): void {
    this.getBrands();
  }
  getBrands(){
    this.brandService.getCars().subscribe((response) =>{
      this.brands = response.data
      this.toastrService.success("Markalar Başarılı listelendi")
    });
  }
  deleteBrand(brand : Brand){
    this.brandService.delete(brand).subscribe();
    this.toastrService.success("Markalar Başarılı Silindi")
  }

}