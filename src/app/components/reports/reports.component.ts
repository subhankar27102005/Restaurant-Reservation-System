
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationService } from '../../services/reservation.service';
import { Reservation } from '../../models/reservation.model';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {

  reservations: Reservation[] = [];

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

  constructor(private reservationService: ReservationService) {
    this.loadReports();
  }

  loadReports(): void {
    this.reservations = [
      ...this.reservationService.getReservations()
    ];
    console.log('Reports refreshed successfully!');
  }

  get totalReservations(): number {
    return this.reservations.length;
  }

  get confirmedReservations(): number {
    return this.reservations.filter(
      r => r.status === 'Confirmed'
    ).length;
  }

  get completedReservations(): number {
    return this.reservations.filter(
      r => r.status === 'Completed'
    ).length;
  }

  get cancelledReservations(): number {
    return this.reservations.filter(
      r => r.status === 'Cancelled'
    ).length;
  }

  get pendingReservations(): number {
    return this.reservations.filter(
      r => r.status === 'Pending'
    ).length;
  }

  get confirmedPercentage(): number {
    return this.getPercentage(this.confirmedReservations);
  }

  get pendingPercentage(): number {
    return this.getPercentage(this.pendingReservations);
  }

  get cancelledPercentage(): number {
    return this.getPercentage(this.cancelledReservations);
  }

  get completedPercentage(): number {
    return this.getPercentage(this.completedReservations);
  }

  get statusChart(): string {
    const total = this.totalReservations;

    if (total === 0) {
      return 'conic-gradient(#e5e7eb 0% 100%)';
    }

    const confirmed = this.confirmedPercentage;
    const pending = confirmed + this.pendingPercentage;
    const cancelled = pending + this.cancelledPercentage;

    return `conic-gradient(
      #2563eb 0% ${confirmed}%,
      #f59e0b ${confirmed}% ${pending}%,
      #ef4444 ${pending}% ${cancelled}%,
      #16a34a ${cancelled}% 100%
    )`;
  }

  get trendData(): { date: string; count: number }[] {
    const grouped: { [key: string]: number } = {};

    this.reservations.forEach(reservation => {
      grouped[reservation.date] =
        (grouped[reservation.date] || 0) + 1;
    });

    return Object.keys(grouped)
      .sort()
      .slice(-7)
      .map(date => ({
        date,
        count: grouped[date]
      }));
  }

  get maxTrendCount(): number {
    return Math.max(
      1,
      ...this.trendData.map(item => item.count)
    );
  }

  getPercentage(value: number): number {
    if (this.totalReservations === 0) {
      return 0;
    }

    return Math.round(
      (value / this.totalReservations) * 100
    );
  }
}
