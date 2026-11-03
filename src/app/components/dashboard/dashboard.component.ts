
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ReservationService } from '../../services/reservation.service';
import { CustomerService } from '../../services/customer.service';
import { TableService } from '../../services/table.service';

import { Reservation } from '../../models/reservation.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  totalReservations = 0;
  availableTables = 0;
  occupiedTables = 0;
  totalCustomers = 0;

  recentReservations: Reservation[] = [];

  // Latest Feedback Data
  feedbacks = [
    {
      customerName: 'Rahul Sharma',
      comment: 'Excellent food and great service!',
      rating: 4.5
    },
    {
      customerName: 'Priya Singh',
      comment: 'Very nice restaurant experience.',
      rating: 5
    },
    {
      customerName: 'Amit Kumar',
      comment: 'Food was good and staff was friendly.',
      rating: 3.5
    }
  ];

  constructor(
    private reservationService: ReservationService,
    private customerService: CustomerService,
    private tableService: TableService
  ) {
    this.loadDashboard();
  }

  loadDashboard(): void {

    const reservations = this.reservationService.getReservations();

    this.totalReservations = reservations.length;

    this.availableTables =
      this.tableService.getAvailableTables().length;

    this.occupiedTables =
      this.tableService.getOccupiedTables().length;

    this.totalCustomers =
      this.customerService.getCustomers().length;

    this.recentReservations = [...reservations]
      .slice(-5)
      .reverse();
  }
}
