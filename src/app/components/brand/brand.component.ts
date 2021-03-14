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
  constructor(private brandService:brandService) { }

  ngOnInit(): void {
    this.getBrands();
  }


  getBrands(){
    this.brandService.getCars().subscribe(response => {
      this.brand = response.data
     
    } )
  }


}
