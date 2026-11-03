
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Reservation } from '../../models/reservation.model';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent {

  @Output() reservationAdded = new EventEmitter<Reservation>();
  @Output() cancelled = new EventEmitter<void>();

  reservation: Reservation = {
    id: 0,
    customerName: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
    tableNumber: 1,
    status: 'Pending'
  };

  addReservation(): void {
    if (
      !this.reservation.customerName.trim() ||
      !this.reservation.phone.trim() ||
      !this.reservation.date ||
      !this.reservation.time ||
      this.reservation.guests < 1
    ) {
      alert('Please fill all required fields.');
      return;
    }

    this.reservationAdded.emit({
      ...this.reservation,
      id: Date.now()
    });

    this.reservation = {
      id: 0,
      customerName: '',
      phone: '',
      date: '',
      time: '',
      guests: 1,
      tableNumber: 1,
      status: 'Pending'
    };
  }

  cancel(): void {
    this.cancelled.emit();
  }
}
