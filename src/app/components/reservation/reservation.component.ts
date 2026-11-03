
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReservationService } from '../../services/reservation.service';
import { Reservation } from '../../models/reservation.model';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReservationFormComponent
  ],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {

  reservations: Reservation[] = [];
  searchText = '';
  showForm = false;

  constructor(
    private reservationService: ReservationService
  ) {
    this.loadReservations();
  }

  // Load all reservations
  loadReservations(): void {
    this.reservations =
      this.reservationService.getReservations();
  }

  // Show reservation form
  showReservationForm(): void {
    this.showForm = true;
  }

  // Hide reservation form
  hideReservationForm(): void {
    this.showForm = false;
  }

  // Add reservation received from the child form
  addReservation(reservation: Reservation): void {
    this.reservationService.addReservation(reservation);
    this.loadReservations();
    this.showForm = false;
  }

  // Delete reservation
  deleteReservation(id: number): void {
    this.reservationService.deleteReservation(id);
    this.loadReservations();
  }

  // Search by customer name
  get filteredReservations(): Reservation[] {
    const search = this.searchText.toLowerCase().trim();

    if (!search) {
      return this.reservations;
    }

    return this.reservations.filter(reservation =>
      reservation.customerName
        .toLowerCase()
        .includes(search)
    );
  }
}
