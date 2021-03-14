import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer :Customer[] = [];
  constructor(private customerService :CustomerService ) { }

  ngOnInit(): void {

    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getCustomer().subscribe(response => {

      this.customer = response.data;
    })


  }

}
