
import { Routes } from '@angular/router';

// Component Imports
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { TableLayoutComponent } from './components/table-layout/table-layout.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ReportsComponent } from './components/reports/reports.component';

// Authentication Guard
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [

  // Home Page
  {
    path: 'home',
    component: HomeComponent
  },

  // Login Page
  {
    path: 'login',
    component: LoginComponent
  },

  // Dashboard Page
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },

  // Reservations Page
  {
    path: 'reservations',
    component: ReservationComponent,
    canActivate: [authGuard]
  },

  // Table Management Page
  {
    path: 'tables',
    component: TableLayoutComponent,
    canActivate: [authGuard]
  },

  // Customers Page
  {
    path: 'customers',
    component: CustomerComponent,
    canActivate: [authGuard]
  },

  // Reports Page
  {
    path: 'reports',
    component: ReportsComponent,
    canActivate: [authGuard]
  },

  // Default Route
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  // Wildcard Route - Always Last
  {
    path: '**',
    redirectTo: 'login'
  }

];
