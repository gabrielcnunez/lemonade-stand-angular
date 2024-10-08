import { Component } from '@angular/core';
import { ProductComponent } from "./product/product.component";
import { CardComponent } from "./card/card.component";

interface Product {
  name: string,
  amount: number,
  max: number,
  price: number,
  unit: string
}

@Component({
  selector: 'app-lemonade',
  standalone: true,
  imports: [ProductComponent, CardComponent],
  templateUrl: './lemonade.component.html',
  styleUrl: './lemonade.component.css'
})
export class LemonadeComponent {

  products: Product[] = [
    {
      name: 'Lemon Juice',
      price: 0.5,
      amount: 0,
      max: 10,
      unit: 'oz'
    },
    {
      name: 'Sugar',
      price: 0.25,
      amount: 0,
      max: 8,
      unit: 'tsp'
    },
    {
      name: 'Ice',
      price: 0.05,
      amount: 0,
      max: 12,
      unit: 'cubes'
    }
  ]

}
