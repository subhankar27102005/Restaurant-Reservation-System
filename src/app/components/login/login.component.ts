
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName='';
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  login(): void {
    if (
      this.userName ==='admin'&&
      this.email==='admin@gmail.com' &&
      this.password === '12345'
    ) {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid username,email, or password!';
    }
  }
}
