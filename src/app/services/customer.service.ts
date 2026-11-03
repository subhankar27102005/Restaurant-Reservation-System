import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customers: Customer[] = [
    {
      id: 1,
      name: 'Rahul Sharma',
      phone: '9876543210',
      email: 'rahul@gmail.com'
    },
    {
      id: 2,
      name: 'Priya Singh',
      phone: '9876512345',
      email: 'priya@gmail.com'
    },
    {
      id: 3,
      name: 'Amit Kumar',
      phone: '9876501234',
      email: 'amit@gmail.com'
    },
    {
      id: 4,
      name: 'Neha Gupta',
      phone: '9876489765',
      email: 'neha@gmail.com'
    },
    {
      id: 5,
      name: 'Rohan Das',
      phone: '9876478565',
      email: 'rohan@gmail.com'
    }
  ];

  getCustomers(): Customer[] {
    return this.customers;
  }

  addCustomer(customer: Customer): void {
    this.customers.push(customer);
  }

  updateCustomer(customer: Customer): void {

    const index = this.customers.findIndex(
      item => item.id === customer.id
    );

    if (index !== -1) {
      this.customers[index] = customer;
    }
  }

  deleteCustomer(id: number): void {

    this.customers = this.customers.filter(
      customer => customer.id !== id
    );
  }
}