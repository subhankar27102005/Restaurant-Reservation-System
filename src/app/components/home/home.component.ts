
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  dishes = [
    {
      name: 'Pasta Alfredo',
      price: '$12.99',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600'
    },
    {
      name: 'Margherita Pizza',
      price: '$14.99',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600'
    },
    {
      name: 'Classic Burger',
      price: '$11.99',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600'
    },
    {
      name: 'Chocolate Cake',
      price: '$7.99',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600'
    }
  ];

}
