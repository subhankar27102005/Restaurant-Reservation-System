import { Injectable } from '@angular/core';
import { RestaurantTable } from '../models/table.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private tables: RestaurantTable[] = [

    {
      id: 1,
      tableNumber: 1,
      capacity: 2,
      status: 'Available'
    },

    {
      id: 2,
      tableNumber: 2,
      capacity: 2,
      status: 'Occupied'
    },

    {
      id: 3,
      tableNumber: 3,
      capacity: 4,
      status: 'Available'
    },

    {
      id: 4,
      tableNumber: 4,
      capacity: 4,
      status: 'Occupied'
    },

    {
      id: 5,
      tableNumber: 5,
      capacity: 6,
      status: 'Available'
    },

    {
      id: 6,
      tableNumber: 6,
      capacity: 2,
      status: 'Available'
    },

    {
      id: 7,
      tableNumber: 7,
      capacity: 4,
      status: 'Occupied'
    },

    {
      id: 8,
      tableNumber: 8,
      capacity: 6,
      status: 'Available'
    },

    {
      id: 9,
      tableNumber: 9,
      capacity: 4,
      status: 'Occupied'
    },

    {
      id: 10,
      tableNumber: 10,
      capacity: 2,
      status: 'Available'
    }

  ];

  // Get All Tables
  getTables(): RestaurantTable[] {
    return this.tables;
  }

  // Add New Table
  addTable(table: RestaurantTable): void {
    this.tables.push(table);
  }

  // Update Table
  updateTable(table: RestaurantTable): void {

    const index = this.tables.findIndex(
      item => item.id === table.id
    );

    if (index !== -1) {
      this.tables[index] = table;
    }

  }

  // Delete Table
  deleteTable(id: number): void {

    this.tables = this.tables.filter(
      table => table.id !== id
    );

  }

  // Change Table Status
 changeStatus(
  id: number,
  status: 'Available' | 'Occupied'
): void {

  const table = this.tables.find(
    table => table.id === id
  );

  if (table) {
    table.status = status;
  }
}

  // Get Available Tables
  getAvailableTables(): RestaurantTable[] {

    return this.tables.filter(
      table => table.status === 'Available'
    );

  }

  // Get Occupied Tables
  getOccupiedTables(): RestaurantTable[] {

    return this.tables.filter(
      table => table.status === 'Occupied'
    );

  }

}