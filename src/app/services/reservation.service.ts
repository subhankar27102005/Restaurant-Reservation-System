
import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [
    {
      id: 1,
      customerName: 'Rahul',
      phone: '9876543210',
      date: '2026-10-12',
      time: '12:00',
      guests: 2,
      tableNumber: 1,
      status: 'Confirmed'
    },
    {
      id: 2,
      customerName: 'Priya',
      phone: '9876543211',
      date: '2026-10-12',
      time: '13:00',
      guests: 4,
      tableNumber: 2,
      status: 'Pending'
    },
    {
      id: 3,
      customerName: 'Amit',
      phone: '9876543212',
      date: '2026-10-13',
      time: '19:00',
      guests: 3,
      tableNumber: 3,
      status: 'Cancelled'
    }
  ];

  // Get all reservations
  getReservations(): Reservation[] {
    return this.reservations;
  }

  // Add reservation with a random status
  addReservation(reservation: Reservation): void {

    const statuses = [
      'Pending',
      'Confirmed',
      'Cancelled'
    ];

    const randomIndex = Math.floor(
      Math.random() * statuses.length
    );

    const randomStatus = statuses[randomIndex];

    const newReservation: Reservation = {
      ...reservation,
      id: Date.now(),
      status: randomStatus
    };

    this.reservations.push(newReservation);

    console.log('New reservation status:', randomStatus);

    // If Pending, update after 30 seconds
    if (randomStatus === 'Pending') {

      const reservationId = newReservation.id;

      setTimeout(() => {

        const item = this.reservations.find(
          r => r.id === reservationId
        );

        if (item && item.status === 'Pending') {

          item.status = Math.random() < 0.5
            ? 'Confirmed'
            : 'Cancelled';

          console.log(
            'Updated reservation status:',
            item.status
          );

          // Notify Angular components to refresh
          this.reservations = [...this.reservations];
        }

      }, 30000);
    }
  }

  // Delete reservation
  deleteReservation(id: number): void {
    this.reservations = this.reservations.filter(
      reservation => reservation.id !== id
    );
  }

  // Update reservation
  updateReservation(updatedReservation: Reservation): void {
    this.reservations = this.reservations.map(
      reservation =>
        reservation.id === updatedReservation.id
          ? updatedReservation
          : reservation
    );
  }
}
