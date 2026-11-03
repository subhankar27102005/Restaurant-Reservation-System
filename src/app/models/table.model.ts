export interface RestaurantTable {

  id: number;

  tableNumber: number;

  capacity: number;

  status: 'Available' | 'Occupied';

}