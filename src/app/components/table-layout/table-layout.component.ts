import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableService } from '../../services/table.service';
import { RestaurantTable } from '../../models/table.model';

@Component({
  selector: 'app-table-layout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table-layout.component.html',
  styleUrl: './table-layout.component.css'
})
export class TableLayoutComponent {

  tables: RestaurantTable[] = [];

  showAddForm = false;

  newTable = {
    tableNumber: 0,
    capacity: 0
  };

  constructor(private tableService: TableService) {
    this.loadTables();
  }

  // Load tables
  loadTables(): void {
    this.tables = this.tableService.getTables();
  }

  // Available tables
  get availableTables(): number {
    return this.tables.filter(
      table => table.status === 'Available'
    ).length;
  }

  // Occupied tables
  get occupiedTables(): number {
    return this.tables.filter(
      table => table.status === 'Occupied'
    ).length;
  }

  // Open Add Table Form
  openAddForm(): void {
    this.showAddForm = true;
  }

  // Add New Table
  addTable(): void {

    if (
      this.newTable.tableNumber <= 0 ||
      this.newTable.capacity <= 0
    ) {
      alert('Please enter valid table number and capacity');
      return;
    }

    const duplicate = this.tables.some(
      table => table.tableNumber === this.newTable.tableNumber
    );

    if (duplicate) {
      alert('Table number already exists!');
      return;
    }

    const newId = this.tables.length > 0
      ? Math.max(...this.tables.map(t => t.id)) + 1
      : 1;

    const table: RestaurantTable = {
      id: newId,
      tableNumber: this.newTable.tableNumber,
      capacity: this.newTable.capacity,
      status: 'Available'
    };

    this.tableService.addTable(table);

    this.loadTables();

    this.newTable = {
      tableNumber: 0,
      capacity: 0
    };

    this.showAddForm = false;

    alert('Table added successfully!');
  }

  // Change Status
  changeStatus(
    id: number,
    status: 'Available' | 'Occupied'
  ): void {

    this.tableService.changeStatus(id, status);

    this.loadTables();
  }

  // Delete Table
  deleteTable(id: number): void {

    const confirmDelete = confirm(
      'Are you sure you want to delete this table?'
    );

    if (confirmDelete) {
      this.tableService.deleteTable(id);
      this.loadTables();
    }
  }

  // Cancel Form
  cancelForm(): void {

    this.showAddForm = false;

    this.newTable = {
      tableNumber: 0,
      capacity: 0
    };
  }
}