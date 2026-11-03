import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Customer }
  from '../../models/customer.model';

import { CustomerService }
  from '../../services/customer.service';


@Component({
  selector: 'app-customer',
  standalone: true,

  imports: [
    FormsModule
  ],

  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customers: Customer[] = [];

  customer: Customer = {
    id: 0,
    name: '',
    phone: '',
    email: ''
  };


  constructor(
    private customerService: CustomerService
  ) {

    this.loadCustomers();

  }


  loadCustomers(): void {

    this.customers =
      this.customerService.getCustomers();

  }


  addCustomer(): void {

    const newCustomer: Customer = {
      ...this.customer,
      id: Date.now()
    };

    this.customerService
      .addCustomer(newCustomer);

    this.loadCustomers();

    this.customer = {
      id: 0,
      name: '',
      phone: '',
      email: ''
    };

  }


  deleteCustomer(id: number): void {

    this.customerService
      .deleteCustomer(id);

    this.loadCustomers();

  }

}